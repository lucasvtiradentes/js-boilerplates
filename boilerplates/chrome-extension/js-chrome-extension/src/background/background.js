console.log("BACKGROUND JOB")

chrome.runtime.onInstalled.addListener(function () {
  console.log("just installed the extension")
});

chrome.runtime.onUpdateAvailable.addListener(function () {
  console.log("new extension version detected")
})

chrome.runtime.onStartup.addListener(function () {
  console.log("chrome was initiated")
})
