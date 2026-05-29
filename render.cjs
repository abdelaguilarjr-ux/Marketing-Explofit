// Renderiza cada slide (.canvas) del carrusel a un JPG 1080x1350 nativo.
// Uso: node render.cjs <archivo.html> <prefijo-salida> [scale]
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const htmlFile = process.argv[2];
  const prefix = process.argv[3] || 'slide';
  const dsf = Number(process.argv[4] || 2); // 2 = export retina (2160x2700)
  const outDir = path.join(__dirname, 'jpg');
  fs.mkdirSync(outDir, { recursive: true });

  const fileUrl = 'file://' + path.resolve(htmlFile);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: dsf });
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(async () => { if (document.fonts) await document.fonts.ready; });

  const count = await page.$$eval('.canvas', els => els.length);
  console.log('slides:', count);

  for (let i = 0; i < count; i++) {
    // Aísla el slide i: lo fija a pantalla completa a escala nativa 1:1.
    await page.evaluate((idx) => {
      document.body.style.margin = '0';
      const cv = document.querySelectorAll('.canvas');
      cv.forEach((c, j) => {
        const frame = c.closest('.frame');
        if (j === idx) {
          if (frame) { frame.style.cssText = 'all:unset; display:block;'; }
          c.style.transform = 'none';
          c.style.position = 'fixed';
          c.style.top = '0'; c.style.left = '0';
          c.style.width = '1080px'; c.style.height = '1350px';
          c.style.zIndex = '99999';
          c.style.visibility = 'visible';
        } else {
          c.style.visibility = 'hidden';
        }
      });
      window.scrollTo(0, 0);
    }, i);
    await new Promise(r => setTimeout(r, 350));

    const n = String(i + 1).padStart(2, '0');
    const out = path.join(outDir, `${prefix}-${n}.jpg`);
    await page.screenshot({
      path: out, type: 'jpeg', quality: 92,
      clip: { x: 0, y: 0, width: 1080, height: 1350 },
    });
    console.log('->', out);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
