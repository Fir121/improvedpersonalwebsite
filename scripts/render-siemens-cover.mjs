import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Reuse the official wordmark already embedded in the self-contained SVG.
const currentCover = await readFile(new URL('../public/project-images/siemens/cover.svg', import.meta.url), 'utf8');
const logo = currentCover.match(/href="data:image\/png;base64,([^"]+)"/)?.[1];
if (!logo) throw new Error('The Siemens cover SVG must contain its embedded wordmark.');
const dots = [];
const tilt = -0.32;
for (let latitude = -80; latitude <= 80; latitude += 8) {
    const lat = latitude * Math.PI / 180;
    for (let longitude = 0; longitude < 360; longitude += 8) {
        const lon = longitude * Math.PI / 180;
        const x = Math.cos(lat) * Math.sin(lon);
        const y = Math.sin(lat);
        const depth = Math.cos(lat) * Math.cos(lon);
        const rotatedX = x * Math.cos(tilt) - y * Math.sin(tilt);
        const rotatedY = x * Math.sin(tilt) + y * Math.cos(tilt);
        const radius = depth > 0 ? 2.4 + depth * 1.8 : 1.5;
        const opacity = depth > 0 ? 0.25 + depth * 0.6 : 0.08;
        dots.push(`<circle cx="${(1465 + rotatedX * 410).toFixed(2)}" cy="${(445 + rotatedY * 410).toFixed(2)}" r="${radius.toFixed(2)}" fill="${longitude % 40 === 0 && depth > 0.3 ? '#51d8d0' : '#e6d4fa'}" opacity="${opacity.toFixed(2)}"/>`);
    }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
<title>Siemens Energy — Enterprise Software &amp; Generative AI</title>
<defs>
  <linearGradient id="base" x2="1" y2=".5"><stop stop-color="#1b1534"/><stop offset=".6" stop-color="#35194e"/><stop offset="1" stop-color="#641e8c"/></linearGradient>
  <radialGradient id="glow"><stop stop-color="#ad52dd" stop-opacity=".45"/><stop offset="1" stop-color="#641e8c" stop-opacity="0"/></radialGradient>
  <linearGradient id="fade"><stop stop-color="white" stop-opacity="0"/><stop offset=".28" stop-color="white"/></linearGradient>
  <mask id="sphere-mask"><rect x="1000" width="920" height="920" fill="url(#fade)"/></mask>
</defs>
<rect width="1920" height="1080" fill="url(#base)"/>
<ellipse cx="1530" cy="445" rx="710" ry="650" fill="url(#glow)"/>
<g mask="url(#sphere-mask)">${dots.join('')}</g>
<image href="data:image/png;base64,${logo}" x="144" y="122" width="350" height="121.48"/>
<g font-family="Arial, Helvetica, sans-serif" fill="#fff">
  <text x="144" y="555" font-size="24" letter-spacing="4" fill="#cdb3e8">SOFTWARE &amp; AI ENGINEERING</text>
  <text x="138" y="677" font-size="88" font-weight="700" letter-spacing="-2">Enterprise Software</text>
  <text x="138" y="789" font-size="88" font-weight="700" letter-spacing="-2">&amp; Generative AI</text>
</g>
</svg>`;
await writeFile(new URL('../public/project-images/siemens/cover.svg', import.meta.url), svg);
await sharp(Buffer.from(svg)).jpeg({ quality: 94, mozjpeg: true }).toFile(new URL('../public/project-images/siemens/1.jpg', import.meta.url).pathname);
console.log('Rendered Siemens Energy cover at 1920 × 1080.');
