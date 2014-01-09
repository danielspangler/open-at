function click(e) {

    chrome.tabs.getCurrent(function(tab) {
		chrome.runtime.sendMessage({"url": tab}, function(response) {
		  console.log(response.farewell);
		});

    });


};
  
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
