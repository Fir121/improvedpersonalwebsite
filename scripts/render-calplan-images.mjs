import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const sourceRoot = process.argv[2];
if (!sourceRoot) {
    console.error('Usage: node scripts/render-calplan-images.mjs <capture-directory>');
    process.exit(1);
}

const background = '#111827';
const destination = new URL('../public/project-images/calplan/', import.meta.url);
const template = await readFile(new URL('../design/project-images/imac-template.png', import.meta.url));
const screen = { left: 542, top: 169, width: 673, height: 382 };

for (let index = 1; index <= 3; index++) {
    const screenshot = await sharp(resolve(sourceRoot, `web-${index}.png`))
        .resize(screen.width, screen.height, { fit: 'contain', background: '#080808' })
        .png().toBuffer();
    const composed = await sharp(template).flatten({ background })
        .composite([{ input: screenshot, left: screen.left, top: screen.top }])
        .png().toBuffer();
    await sharp(composed).resize(1920, 1080, { fit: 'contain', background })
        .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toFile(new URL(`${index}.jpg`, destination).pathname);
}

const screenHeight = 928;
const screenTop = 94;
const screenLefts = [482, 1010];
const pairs = [
    [['home', 'Today'], ['calendar', 'Weekly calendar']],
    [['task', 'Task planning'], ['reminder', 'Reminder configuration']],
];

for (const [pairIndex, pair] of pairs.entries()) {
    const layers = [];
    const labels = [];
    for (const [index, [name, label]] of pair.entries()) {
        const { data, info } = await sharp(resolve(sourceRoot, `ios-${name}.png`))
            .resize({ height: screenHeight }).png().toBuffer({ resolveWithObject: true });
        // This is the actual simulator viewport, with its original aspect ratio retained.
        layers.push({ input: data, left: screenLefts[index], top: screenTop });
        labels.push(`<text x="${screenLefts[index] + info.width / 2}" y="59" text-anchor="middle" font-size="28">${label}</text>`);
    }
    const captions = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
      <g font-family="Arial, Helvetica, sans-serif" fill="#e5e7eb">${labels.join('')}
      <text x="960" y="1061" text-anchor="middle" font-size="22" fill="#b3bdca">Native SwiftUI · iPhone 17 / iOS 26.5 · Local demonstration data</text></g>
    </svg>`);
    await sharp({ create: { width: 1920, height: 1080, channels: 3, background } })
        .composite([...layers, { input: captions }])
        .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toFile(new URL(`${pairIndex + 4}.jpg`, destination).pathname);
}

console.log('Rendered three CalPlan iMac images and two native iOS pairs at 1920 × 1080.');
