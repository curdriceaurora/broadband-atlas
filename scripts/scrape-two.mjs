import { chromium } from 'playwright';
const TARGETS = [
  { id: 'hughesnet', url: 'https://www.hughesnet.com/plans' },
  { id: 'hughesnet2', url: 'https://www.hughesnet.com/shop' },
  { id: 'xfinity', url: 'https://www.xfinity.com/local/ga/suwanee' },
];
const browser = await chromium.launch({ channel:'chrome', headless:true, args:['--disable-blink-features=AutomationControlled'] });
const ctx = await browser.newContext({ viewport:{width:1366,height:1600}, userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', locale:'en-US' });
const results=[];
for (const t of TARGETS){ const page=await ctx.newPage(); const r={id:t.id,url:t.url};
  try{ const resp=await page.goto(t.url,{waitUntil:'domcontentloaded',timeout:45000}); r.httpStatus=resp?resp.status():null; await page.waitForTimeout(4500); r.finalUrl=page.url(); r.title=await page.title();
    const text=(await page.locator('body').innerText().catch(()=>'')).replace(/\n{2,}/g,'\n').trim();
    r.blocked=/access denied|pardon the interruption|captcha|unusual traffic|verify you are|request unsuccessful|reference #\d/i.test(text);
    r.priceLines=text.split('\n').filter(l=>/\$\d|\bMbps\b|\bGbps\b|\bGB\b|\bGig\b|autopay|auto pay|mo\.?\b|month|Fusion|Select|Elite/i.test(l)).slice(0,50);
    await page.screenshot({path:`/tmp/scrape2-${t.id}.png`}).catch(()=>{});
  }catch(e){r.error=String(e).slice(0,200);} finally{await page.close();}
  results.push(r);} 
await browser.close(); console.log(JSON.stringify(results,null,2));
