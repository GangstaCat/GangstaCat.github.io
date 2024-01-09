const { userAgent } = navigator;
function getBrowser() {
  // get browser and version, shamelessly stolen from some website
  if (userAgent.includes('Firefox/')) {
    return `Firefox`
  } else if (userAgent.includes('Edg/')) {
    return `Edge`
  } else if (userAgent.includes('Chrome/')) {
    return `Chrome`
  } else if (userAgent.includes('Safari/')) {
    return `Safari`
  }
}

if (getBrowser() !== "Firefox") {window.location.href = "/firefox.html"}