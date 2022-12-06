// get all the elements, haha bloat go brrrr
const content = document.getElementsByClassName("content")[0]
const iptext = document.getElementById("ip")
const coordstext = document.getElementById("coords")
const isptext = document.getElementById("isp")
const citytext = document.getElementById("city")
const browsertext = document.getElementById("browser")
const ostext = document.getElementById("os")

const Geolocation = navigator.geolocation;

const { userAgent } = navigator;
function getBrowser() {
  // get browser and version, shamelessly stolen from some website
  if (userAgent.includes('Firefox/')) {
    return `Firefox v${userAgent.split('Firefox/')[1]}`
  } else if (userAgent.includes('Edg/')) {
    return `Edg v${userAgent.split('Edg/')[1]}`
  } else if (userAgent.includes('Chrome/')) {
    return `Chrome v${userAgent.split('Chrome/')[1]}`
  } else if (userAgent.includes('Safari/')) {
    return `Safari v${userAgent.split('Safari/')[1]}`
  }

}
// get geolocation
Geolocation.getCurrentPosition(GeolocationPosition => {
  const coords = `${GeolocationPosition.coords.latitude}, ${GeolocationPosition.coords.longitude}`;
  coordstext.innerHTML = coords;
})

// fetch some shit and update the html
fetch('http://myip.wtf/json')
  .then((response) => response.json())
  .then((data) => {
    const ip = data.YourFuckingIPAddress;
    const isp = data.YourFuckingISP;
    const city = data.YourFuckingLocation;
    citytext.innerHTML = city;
    isptext.innerHTML = isp;
    iptext.innerHTML = ip;
  });
browsertext.innerHTML = `${getBrowser()}`
const os = userAgent.match(/\(([^)]+)\)/g)[0];
ostext.innerHTML = os.replace(/\(*\)*/g, "");

console.log(navigator)
// just for reference