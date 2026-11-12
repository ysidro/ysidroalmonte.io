// Build-time only: reads a /public image's real pixel size so <img> can carry
// width + height (the browser reserves the right box before the file arrives).
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const cache = new Map<string, Promise<{ width: number; height: number } | undefined>>();

export function imageSize(src: string | undefined) {
  if (!src || !src.startsWith('/')) return Promise.resolve(undefined);
  if (!cache.has(src)) {
    cache.set(src, readFile(join(process.cwd(), 'public', src))
      .then((buf) => sharp(buf).metadata())
      .then((m) => (m.width && m.height ? { width: m.width, height: m.height } : undefined))
      .catch(() => undefined));
  }
  return cache.get(src)!;
}
