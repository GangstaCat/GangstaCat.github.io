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
    // Safari
    // why is there nothing here
  }

}
// get geolocation
Geolocation.getCurrentPosition(GeolocationPosition => {
  const coords = `${GeolocationPosition.coords.latitude}, ${GeolocationPosition.coords.longitude}`;
  coordstext.innerHTML = coords;
})

// get some shit and wait until ip is fetched for some reason
fetch('http://myip.wtf/json')
  .then((response) => response.json())
  .then((data) => {
    const ip = data.YourFuckingIPAddress;
    const isp = data.YourFuckingISP;
    const city = data.YourFuckingLocation;
    citytext.innerHTML = city;
    isptext.innerHTML = isp;
    iptext.innerHTML = ip;
    browsertext.innerHTML = `${getBrowser()}`
    ostext.innerHTML = `${navigator.oscpu.split(";")[0]} ${navigator.oscpu.split(";")[2]}`
    // TODO: figure out how to get the OS out of the userAgent because chromium won't accept my authority
  });

console.log(navigator)
// just for reference