function switchTheme() {
  const body = document.body;
  if (body.className === "light" && localStorage.getItem("theme") === "light") {
    body.className = "dark";
    localStorage.setItem("theme", "dark")
  } else if (body.className === "dark" && localStorage.getItem("theme") === "dark") {
    body.className = "light";
    localStorage.setItem("theme", "light");
  }
}