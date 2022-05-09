if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

setInterval(() => {
  const theme = document.getElementById("themeSelect").value;
  const body = document.body;
  if (theme === "light") {
    body.className = "light";
    localStorage.setItem("theme", "light");
  } else if (theme === "dark") {
    body.className = "dark";
    localStorage.setItem("theme", "dark")
  } else if (theme === "dynamic") {
    localStorage.setItem("theme", "dynamic");
    const date = new Date();
    if (date.getHours() >= 19 || date.getHours() < 7) {
      body.className = "dark";
    } else if (date.getHours() < 19 && date.getHours() >= 7) {
      body.className = "light";
    } else {
      alert("What the fuck are you doing");
    }
    document.getElementById("themeSelect").value = localStorage.getItem("theme");
  }
}, 10);