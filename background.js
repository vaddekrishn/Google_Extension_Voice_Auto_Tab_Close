let existingTabId = null;

chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url.startsWith("https://voice.google.com/")) {
    if (existingTabId !== null) {
      chrome.tabs.remove(existingTabId, function() {
        console.log("Closed the old tab with URL starting with https://voice.google.com/");
      });
    }
    existingTabId = tab.id;
  }
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  if (tabId === existingTabId) {
    existingTabId = null;
  }
});
