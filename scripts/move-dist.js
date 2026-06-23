import { readdirSync, renameSync, mkdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const distDir = 'dist';
const baseDir = join(distDir, 'opinionated-translations');

if (!existsSync(baseDir)) {
  mkdirSync(baseDir, { recursive: true });
}

// Move all files/dirs from dist/ to dist/opinionated-translations/ (skip the target dir itself)
for (const entry of readdirSync(distDir)) {
  if (entry === 'opinionated-translations') continue;
  const src = join(distDir, entry);
  const dest = join(baseDir, entry);
  renameSync(src, dest);
}

console.log('Moved files to opinionated-translations/');
