
function openLocal(info, tab) {
  var subdomain = localStorage["subdomain"];
  if (subdomain) {
    openIn(info, tab, "http://" + subdomain + ".homes.com");
  } else {
    alert("Set your local subdomain in the extension options.");
  }
}

function openDev(info, tab) {
  openIn(info, tab, "http://dev.homes.com");
}

function openStaging(info, tab) {
  openIn(info, tab, "http://staging.homes.com");
}

function openProd(info, tab) {
	  openIn(info, tab, "http://www.homes.com");
}

function openBeta(info, tab) {
	openIn(info, tab, "http://beta.homes.com");
}

function openIn(info, tab, prefix) {
  var selection = info.selectionText.trim(); // remove whitespace
  if (selection.indexOf('/')!=0) { // if the selection doesn't have a starting forward slash, make it so
  	selection = '/' + selection;
  }

  var hostTest = /.*homes.com(.*)/;
  selection = selection.replace(hostTest, "$1");

  var newURL = prefix + selection;
  newURL = newURL.replace("//", "/"); // remove any duplicate forward slashes if they exist
  chrome.tabs.create({ index: tab.index+1, url: newURL });  
}

var id = chrome.contextMenus.create({"title": "Local Dev", "contexts":["selection"],
                                     "onclick": openLocal});

var id = chrome.contextMenus.create({"title": "Dev", "contexts":["selection"],
                                     "onclick": openDev});

var id = chrome.contextMenus.create({"title": "Staging", "contexts":["selection"],
                                     "onclick": openStaging});

var id = chrome.contextMenus.create({"title": "Beta", "contexts":["selection"],
					"onclick": openBeta});

var id = chrome.contextMenus.create({"title": "Prod", "contexts":["selection"],
	                                     "onclick": openProd});


