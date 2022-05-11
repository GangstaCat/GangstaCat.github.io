function loadTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  const savedTheme = localStorage.getItem("theme");
  document.getElementById("themeSelect").value = savedTheme;

  setInterval(() => {
    setTheme(document.getElementById("themeSelect").value);
  }, 10);
}

function setTheme(style) {
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
}