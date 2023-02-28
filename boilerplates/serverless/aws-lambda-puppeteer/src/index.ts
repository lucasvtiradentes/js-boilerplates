import chromium from "chrome-aws-lambda";
import {APIGatewayEvent} from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
  const response = await getTitle();
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

async function getTitle() {
  try {
    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    });

    const page = await browser.newPage();
    await page.goto("https://javascriptwebscrapingguy.com/");
    let title = await page.$eval("title", (el) => el.textContent);

    await browser.close();

    return {
      error: false,
      data: title
    };
  } catch (e: any) {
    return {
      error: true,
      message: e.message
    };
  }
}
