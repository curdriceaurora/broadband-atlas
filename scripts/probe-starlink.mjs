import { chromium } from 'playwright';

const ADDRESS = '6715 Fairstream Ct, Suwanee, GA 30024';
const SHOT = '/tmp/probe-starlink.png';

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: ['--disable-blink-features=AutomationControlled'],
});
const ctx = await browser.newContext({
  viewport: { width: 1366, height: 900 },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  locale: 'en-US',
});
const page = await ctx.newPage();

const out = { address: ADDRESS, steps: [] };
try {
  await page.goto('https://www.starlink.com/residential', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3500);
  out.title = await page.title();
  out.url = page.url();

  // Bot-block / interstitial detection
  const bodyText = (await page.locator('body').innerText().catch(() => '')).slice(0, 4000);
  out.blocked = /access denied|pardon the interruption|are you a human|captcha|unusual traffic|verify you are/i.test(bodyText);

  // Find any address-like input
  const inputs = await page.locator('input:visible').all();
  out.visibleInputs = [];
  for (const inp of inputs.slice(0, 12)) {
    out.visibleInputs.push({
      placeholder: await inp.getAttribute('placeholder').catch(() => null),
      name: await inp.getAttribute('name').catch(() => null),
      type: await inp.getAttribute('type').catch(() => null),
      aria: await inp.getAttribute('aria-label').catch(() => null),
    });
  }
  out.bodySample = bodyText.slice(0, 800);
} catch (e) {
  out.error = String(e);
} finally {
  await page.screenshot({ path: SHOT, fullPage: false }).catch(() => {});
  await browser.close();
}
console.log(JSON.stringify(out, null, 2));
