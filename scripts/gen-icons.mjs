// One-off icon generator — crops the emblem mark from the site logo
// and emits Next.js app icons. Run: node scripts/gen-icons.mjs
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const SRC = 'public/TTA_2@4x.webp'

// Emblem mark bounding box measured from the alpha channel
// (x 59–495, y 182–621 of the 1600×799 logo), centered + padded to a square.
const emblem = await sharp(SRC)
  .extract({ left: 40, top: 165, width: 475, height: 475 })
  .toBuffer()

const square = (size, bg) =>
  sharp(emblem).resize(size, size, {
    fit: 'contain',
    background: bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
  })

// app/icon.png — 512×512 transparent PNG (modern browsers, PWA)
await square(512).png().toFile('app/icon.png')

// app/apple-icon.png — 180×180 on brand cream (iOS can't do transparency)
await square(180, { r: 248, g: 248, b: 246, alpha: 1 }).png().toFile('app/apple-icon.png')

// app/favicon.ico — 32×32 PNG wrapped in an ICO container (valid since Vista)
const png32 = await square(32).png().toBuffer()
const ico = Buffer.alloc(6 + 16 + png32.length)
ico.writeUInt16LE(0, 0) // reserved
ico.writeUInt16LE(1, 2) // type: icon
ico.writeUInt16LE(1, 4) // count
ico.writeUInt8(32, 6) // width
ico.writeUInt8(32, 7) // height
ico.writeUInt8(0, 8) // colors
ico.writeUInt8(0, 9) // reserved
ico.writeUInt16LE(1, 10) // color planes
ico.writeUInt16LE(32, 12) // bpp
ico.writeUInt32LE(png32.length, 14) // data size
ico.writeUInt32LE(22, 18) // data offset
png32.copy(ico, 22)
writeFileSync('app/favicon.ico', ico)

console.log('wrote app/icon.png, app/apple-icon.png, app/favicon.ico')
