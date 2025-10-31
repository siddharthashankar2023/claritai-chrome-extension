// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSelectedText') {
        const selectedText = window.getSelection().toString();
        sendResponse({ selectedText: selectedText });
    }
});

// Add context menu option for selection (optional)
chrome.runtime.onInstalled?.addListener(() => {
    chrome.contextMenus.create({
        id: 'clarityai',
        title: 'Simplify with ClaritAI',
        contexts: ['selection']
    });
});

chrome.contextMenus?.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'clarityai') {
        chrome.action.openPopup();
    }
});
