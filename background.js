chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.startsWith("https://voice.google.com/")) {
    chrome.tabs.query({ url: "https://voice.google.com/*" }, function(tabs) {
      tabs.forEach(function(tab) {
        if (tab.id!== tabId) {
          chrome.tabs.remove(tab.id);
        }
      });
    });
  }
});