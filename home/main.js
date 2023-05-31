function copy() {
  // copy discord tag to clipboard and change the text
  navigator.clipboard.writeText("GangstaCat#0458");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
}


function outFunc() {
  // change text back when the mouse moves away
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}