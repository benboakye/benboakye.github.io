import { writeFileSync } from 'node:fs';
import { PNG } from 'pngjs';

function setPixel(png, x, y, r, g, b, a = 255) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const idx = (png.width * y + x) << 2;
  png.data[idx] = r;
  png.data[idx + 1] = g;
  png.data[idx + 2] = b;
  png.data[idx + 3] = a;
}

function createIcon(size) {
  const png = new PNG({ width: size, height: size });

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      setPixel(png, x, y, 13, 17, 23);
    }
  }

  const cx = size / 2;
  const scale = size / 32;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = (x - cx) / scale;
      const ny = (y - 4 * scale) / scale;

      const inShield =
        ny >= 0 &&
        ny <= 24 &&
        Math.abs(nx) <= 10 - ny * 0.25 &&
        !(ny > 22 && Math.abs(nx) > 6 - (ny - 22) * 0.8);

      if (inShield) {
        setPixel(png, x, y, 22, 27, 34);
      }

      const onBorder =
        inShield &&
        (() => {
          const neighbors = [
            [x - 1, y],
            [x + 1, y],
            [x, y - 1],
            [x, y + 1],
          ];
          return neighbors.some(([px, py]) => {
            const pnx = (px - cx) / scale;
            const pny = (py - 4 * scale) / scale;
            const inside =
              pny >= 0 &&
              pny <= 24 &&
              Math.abs(pnx) <= 10 - pny * 0.25 &&
              !(pny > 22 && Math.abs(pnx) > 6 - (pny - 22) * 0.8);
            return !inside;
          });
        })();

      if (onBorder) {
        setPixel(png, x, y, 124, 58, 237);
      }

      const crossV = Math.abs(nx) <= 1.2 && ny >= 9 && ny <= 17;
      const crossH = Math.abs(ny - 14) <= 1.2 && Math.abs(nx) <= 4;
      if ((crossV || crossH) && inShield) {
        setPixel(png, x, y, 34, 211, 238);
      }
    }
  }

  return PNG.sync.write(png);
}

writeFileSync('public/favicon-32x32.png', createIcon(32));
writeFileSync('public/favicon-16x16.png', createIcon(16));
writeFileSync('public/apple-touch-icon.png', createIcon(180));
writeFileSync('public/favicon.ico', createIcon(32));

console.log('Favicons generated in public/');
