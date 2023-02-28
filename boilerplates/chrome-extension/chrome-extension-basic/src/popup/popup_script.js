document.getElementById('btn_01').addEventListener('click', function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("./popup/page_01/index.html") });
});
