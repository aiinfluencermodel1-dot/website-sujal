import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/ai-chatbots', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/w-service.png' });
await page.close();
// stats check
const p2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await p2.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 60000 });
await p2.waitForTimeout(2000);
await p2.evaluate(() => {
  const els = [...document.querySelectorAll('h2')].filter((e) => e.textContent.includes('Proven Outcomes'));
  els[0]?.scrollIntoView({ block: 'center' });
});
await p2.waitForTimeout(2500);
await p2.screenshot({ path: '/tmp/w-stats.png' });
await p2.close();
await browser.close();
console.log('done');
