import { BrowserWindow, app } from 'electron';
import pie from 'puppeteer-in-electron';
import puppeteer from 'puppeteer-core';

const main = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer as any);

  const window = new BrowserWindow();
  const url = 'https://google.com/';
  await window.loadURL(url);

  const page = await pie.getPage(browser, window);
  console.log(page.url());
  // window.destroy();
};

main();
