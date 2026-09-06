// Capture a page as a sequence of viewport-sized frames while scrolling (keeps pinned sections honest).
import puppeteer from 'puppeteer-core';
const [,, out, path = '/', w = '1440', h = '900'] = process.argv;
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
await page.setViewport({ width: +w, height: +h });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));
const total = await page.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += +h * 0.9) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: `${out}/frame-${String(i++).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 70 });
}
console.log('frames', i, 'height', total, errors.join('\n'));
await browser.close();
