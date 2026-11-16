import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const sourceRoot = process.argv[2];
if (!sourceRoot) {
    console.error('Usage: node scripts/render-project-mockups.mjs <original-screenshot-directory>');
    console.error('Provide lectureloop/1.jpg–5.jpg and ourpatch/1.jpg–5.jpg inside that directory.');
    process.exit(1);
}
const template = await readFile(new URL('../design/project-images/imac-template.png', import.meta.url));

// Screen aperture measured on the 1672 × 941 template. Fit preserves UI proportions.
const screen = { left: 542, top: 169, width: 673, height: 382 };
for (const [project, background] of [
    ['lectureloop', '#041e42'],
    ['ourpatch', '#4b7758'],
]) {
    for (let index = 1; index <= 5; index++) {
        const screenshot = await sharp(resolve(sourceRoot, project, `${index}.jpg`))
            .resize(screen.width, screen.height, { fit: 'contain', background: '#080808' })
            .png()
            .toBuffer();
        // Composite the original captured UI after generating the hardware, so no UI is redrawn.
        const composed = await sharp(template)
            .flatten({ background })
            .composite([{ input: screenshot, left: screen.left, top: screen.top }])
            .png()
            .toBuffer();
        await sharp(composed)
            .resize(1920, 1080, { fit: 'contain', background })
            .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: '4:4:4' })
            .toFile(new URL(`../public/project-images/${project}/${index}.jpg`, import.meta.url).pathname);
    }
    console.log(`Rendered five ${project} iMac mockups at 1920 × 1080.`);
}
