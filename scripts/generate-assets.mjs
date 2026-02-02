import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'logo.png');

async function generateAssets() {
  console.log('Generating favicon and OG assets...');

  // Generate favicon-32x32.png
  await sharp(logoPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png');

  // Generate apple-touch-icon.png (180x180)
  await sharp(logoPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Generate favicon.ico (32x32)
  await sharp(logoPath)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created favicon.ico');

  // Generate OG image (1200x630) with logo centered on blue background
  const ogWidth = 1200;
  const ogHeight = 630;
  const logoSize = 200;

  // Create blue background with logo and text
  const svgOverlay = `
    <svg width="${ogWidth}" height="${ogHeight}">
      <rect width="100%" height="100%" fill="#2563eb"/>
      <text x="50%" y="65%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="48" font-weight="bold" fill="white">
        SmålandWebb
      </text>
      <text x="50%" y="78%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" fill="#93c5fd">
        Webbdesign i Småland
      </text>
    </svg>
  `;

  // Resize logo for OG image
  const resizedLogo = await sharp(logoPath)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 37, g: 99, b: 235, alpha: 0 } })
    .toBuffer();

  // Create OG image
  await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: resizedLogo,
        top: Math.round((ogHeight - logoSize) / 2) - 80,
        left: Math.round((ogWidth - logoSize) / 2),
      }
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Created og-image.png');

  console.log('All assets generated successfully!');
}

generateAssets().catch(console.error);
