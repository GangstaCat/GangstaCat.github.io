function checkUrl(url) {
  var request = false;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest;
  } else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHttp");
  }

  if (request) {
    request.open("GET", url);
    if (request.status == 200) { return true; }
  }

  return false;
}

if (checkUrl() === false) {
  window.location.replace("https://gangstacat.github.io/404")
}