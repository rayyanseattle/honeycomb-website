// Screenshot pages at desktop and mobile widths, scrolling first so reveals fire.
import puppeteer from 'puppeteer-core';

const base = 'http://localhost:4321';
const out = process.argv[2] || '.';
const pages = (process.argv[3] || '/,/crafts/block-print,/archive,/about,/contact').split(',');
const viewports = [{ name: 'desk', width: 1440, height: 900 }, { name: 'mob', width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }];

const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport(vp);
  if (!process.env.MOTION) await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text()); });
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: 'networkidle0', timeout: 60000 });
    // scroll through to trigger reveals
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    const name = (path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-'));
    await page.screenshot({ path: `${out}/${name}-${vp.name}.jpg`, fullPage: true, type: 'jpeg', quality: 70 });
    console.log('shot', name, vp.name, await page.evaluate(() => document.body.scrollHeight));
  }
  if (errors.length) console.log(vp.name, errors.join('\n'));
  await page.close();
}
await browser.close();
