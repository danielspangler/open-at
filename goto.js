
function openLocal(info, tab) {
  openIn(info, tab, "http://djspang.homes.com");
}

function openStaging(info, tab) {
  openIn(info, tab, "http://staging.homes.com");
}


function openIn(info, tab, prefix) {
  var newURL = prefix + info.selectionText.trim();
  newURL = newURL.replace("//", "/");
  chrome.tabs.create({ index: tab.index+1, url: newURL });  
}


var id = chrome.contextMenus.create({"title": "Open in Local Dev", "contexts":["selection"],
                                     "onclick": openLocal});


var id = chrome.contextMenus.create({"title": "Open in Staging", "contexts":["selection"],
                                     "onclick": openStaging});


