chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "claritai-simplify",
    title: "ClaritAI: Simplify Selection",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "claritai-simplify" && info.selectionText) {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 480,
      height: 600
    });
  }
});
