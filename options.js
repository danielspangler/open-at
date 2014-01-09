// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("subdomain");
  var subdomain = select.value;
  localStorage["subdomain"] = subdomain;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var subdomain = localStorage["subdomain"];
  if (!subdomain) {
    return;
  }
  var select = document.getElementById("subdomain");
  select.value = subdomain;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);