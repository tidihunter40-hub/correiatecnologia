import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const imageRoot = join(root, 'public', 'images');
const outputDir = join(root, 'artifacts', 'imagem-audit');
const sourceRoots = ['app', 'components', 'lib'];
await mkdir(outputDir, { recursive: true });

async function walk(directory, predicate = () => true) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path, predicate));
    else if (predicate(path)) files.push(path);
  }
  return files;
}

function isLogo(path) {
  return /(?:^|[\\/])(?:correia-tecnologia-logo|logo-header)(?:\.|$)/i.test(path);
}

async function perceptualHash(path) {
  const { data } = await sharp(path).rotate().resize(32, 32, { fit: 'fill' }).greyscale().raw().toBuffer({ resolveWithObject: true });
  const n = 32;
  const coefficients = [];
  for (let v = 0; v < 8; v += 1) {
    for (let u = 0; u < 8; u += 1) {
      if (u === 0 && v === 0) continue;
      let sum = 0;
      for (let y = 0; y < n; y += 1) {
        const cy = Math.cos(((2 * y + 1) * v * Math.PI) / (2 * n));
        for (let x = 0; x < n; x += 1) {
          sum += data[(y * n) + x] * Math.cos(((2 * x + 1) * u * Math.PI) / (2 * n)) * cy;
        }
      }
      coefficients.push(sum);
    }
  }
  const ordered = [...coefficients].sort((a, b) => a - b);
  const median = ordered[Math.floor(ordered.length / 2)];
  return coefficients.map((value) => value > median ? '1' : '0').join('');
}

function hammingDistance(first, second) {
  let distance = 0;
  for (let index = 0; index < first.length; index += 1) if (first[index] !== second[index]) distance += 1;
  return distance;
}

const rasterFiles = await walk(imageRoot, (path) => ['.png', '.webp', '.jpg', '.jpeg', '.avif'].includes(extname(path).toLowerCase()));
const records = [];
for (const path of rasterFiles) {
  const buffer = await readFile(path);
  const dimensions = await sharp(buffer).metadata();
  records.push({
    path: `/${relative(join(root, 'public'), path).replaceAll('\\', '/')}`,
    sizeBytes: (await stat(path)).size,
    width: dimensions.width,
    height: dimensions.height,
    sha256: createHash('sha256').update(buffer).digest('hex'),
    ahash: await perceptualHash(path),
    logo: isLogo(path),
  });
}
const photos = records.filter((record) => !record.logo);
const exactDuplicates = [];
for (const photo of photos) {
  const group = photos.filter((other) => other.sha256 === photo.sha256).map((item) => item.path);
  if (group.length > 1 && !exactDuplicates.some((entry) => entry.paths[0] === group[0])) exactDuplicates.push({ paths: group });
}
const perceptualCandidates = [];
for (let left = 0; left < photos.length; left += 1) {
  for (let right = left + 1; right < photos.length; right += 1) {
    const distance = hammingDistance(photos[left].ahash, photos[right].ahash);
    if (distance <= 6) perceptualCandidates.push({ first: photos[left].path, second: photos[right].path, hammingDistance: distance });
  }
}

const sourceFiles = (await Promise.all(sourceRoots.map((directory) => walk(join(root, directory), (path) => /\.(tsx?|jsx?)$/i.test(path))))).flat();
const referenceCounts = new Map();
for (const sourceFile of sourceFiles) {
  const source = await readFile(sourceFile, 'utf8');
  for (const match of source.matchAll(/['"](\/images\/[^'"?#]+)['"]/g)) {
    const asset = match[1];
    referenceCounts.set(asset, (referenceCounts.get(asset) ?? 0) + 1);
  }
}
const missingStaticReferences = [...referenceCounts.keys()].filter((asset) => !records.some((record) => record.path === asset));
const reusedPhotos = photos.filter((photo) => (referenceCounts.get(photo.path) ?? 0) > 1).map((photo) => ({ path: photo.path, references: referenceCounts.get(photo.path) }));
const lowResolutionPhotos = photos.filter((photo) => Math.min(photo.width ?? 0, photo.height ?? 0) < 300).map(({ path, width, height }) => ({ path, width, height }));

const report = {
  root: resolve(root),
  imageFiles: records.length,
  logoFilesExcludedFromDuplicateComparison: records.filter((record) => record.logo).map((record) => record.path),
  photosCompared: photos.length,
  exactDuplicates,
  perceptualHash: 'DCT 8x8; candidate threshold Hamming distance <= 6',
  perceptualCandidates,
  missingStaticReferences,
  reusedPhotos,
  lowResolutionPhotos,
  records,
};
await writeFile(join(outputDir, 'resultado.json'), JSON.stringify(report, null, 2));
process.stdout.write(`${JSON.stringify({ imageFiles: report.imageFiles, photosCompared: report.photosCompared, exactDuplicates, perceptualCandidates, missingStaticReferences, reusedPhotos, lowResolutionPhotos }, null, 2)}\n`);
