# Portfolio image sources

The public JPEGs in `public/project-images/lectureloop/` and `ourpatch/` use the
existing portfolio's front-facing iMac, keyboard and mouse presentation format.
The backgrounds use LectureLoop navy (`#041e42`) and Our Patch green (`#4b7758`).

The finished images retain demonstration disclosures from the actual interfaces.
Only the surrounding presentation changed; screenshots were fitted
proportionally inside the monitor after generating the blank hardware template.
No application interface or successful AI output was generated or redrawn.

`imac-template.png` was prepared using the built-in imagegen tool, referencing the
existing `public/project-images/gradescale/1.jpg` composition. The generation
request was:

> Keep the same front-facing silver iMac, full stand, white keyboard and mouse,
> relative positions, camera, material, scale, lighting and soft shadows. Remove
> the GradeScale content, use a flat black screen ready for screenshot compositing,
> and remove the brown background to transparency. Keep all hardware visible with
> generous margins. Generate no application interface.

The original screenshot backups have been removed; the website needs only the
finished images in `public/project-images/`. To regenerate the mockups, supply
new original screenshots in an external directory containing
`lectureloop/1.jpg`–`5.jpg` and `ourpatch/1.jpg`–`5.jpg`, then run
`node scripts/render-project-mockups.mjs /path/to/original-screenshots`.

The Siemens cover remains editable SVG artwork, rendered using
`node scripts/render-siemens-cover.mjs`. It uses an original purple-gradient and
dot-sphere composition inspired by the [brand designer's case study][identity].
The wordmark is the [official white PNG][logo], embedded directly in the
self-contained SVG. The cover renderer reuses that embedded image. The cover retains only
the wordmark, engineering label and main title. No private company screens, invented awards or
photographs are used.

[identity]: https://markenfels.ch/en/referenzen/siemens-energy-brand-experience/
[logo]: https://www.siemens-energy.com/content/dam/siemensenergy-aem/images/logo/SE_Logo_White.png
