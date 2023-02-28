import express, { Request, Response } from 'express';
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';
import puppeteerDev from 'puppeteer';

const PORT = process.env.PORT || 3000;
const NODE_ENV = 'production'; // : 'development'; | process.env.AWS_LAMBDA_FUNCTION_VERSION ?
const app = express();

app.get('/', async (_req: Request, res: Response) => {
  try {
    console.log('Acessou rota padrão');
    const browser = await getPuppeteerObject();
    if (!browser) {
      throw new Error('coundent get borwser object');
    }

    console.log(browser);

    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const title = await page.title();
    return res.send(title);
  } catch (e: any) {
    return res.send(`algum erro maluco: ${e.message}`);
  }
});

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓');
});

app.listen(PORT, () => console.log(`Server in ${NODE_ENV} and is listening on ${PORT}`));

/* ========================================================================== */

async function getPuppeteerObject() {
  let options = {};
  if (NODE_ENV === 'production') {
    options = {
      args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true
    };
  }

  try {
    const browser = NODE_ENV === 'production' ? await puppeteer.launch(options) : await puppeteerDev.launch(options);
    return browser;
  } catch (err) {
    return null;
  }
}
