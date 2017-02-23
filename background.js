/* When the chrome extension icon is clicked open the chrome newtab page */
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url': "chrome://newtab"});
});