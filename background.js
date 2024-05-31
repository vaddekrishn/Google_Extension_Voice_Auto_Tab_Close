chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url.startsWith("https://voice.google.com/")) {
    chrome.tabs.query({ url: "https://voice.google.com/*" }, function(tabs) {
      if (tabs.length > 1) {
        chrome.tabs.remove(tabs[0].id, function() {
          console.log("Closed the first created tab with URL starting with https://voice.google.com/");
        });
      }
    });
  }
});