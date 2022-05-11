themes = ['light', 'dark', 'dynamic'];

function loadTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  const savedTheme = localStorage.getItem("theme");
  setTheme(themes.indexOf(savedTheme));
}

function setTheme(themeid) {
  var style = themes[themeid];
  localStorage.setItem("theme", style);

  if (style == "dynamic") {
    const date = new Date();
    if (date.getHours() >= 19 || date.getHours() < 7) {
      style = "dark";
    } else if (date.getHours() < 19 && date.getHours() >= 7) {
      style = "light";
    } else {
      alert("What the fuck are you doing");
    }
  }

  document.body.className = style;
  document.getElementById("selectedThemeIndicator").style.left = 100 * themeid + (7.78333 * themeid) + "px";
}