// get all the elements, haha bloat go brrrr
const content = document.getElementsByClassName("content")[0]
const iptext = document.getElementById("ip")
const coordstext = document.getElementById("coords")
const isptext = document.getElementById("isp")
const citytext = document.getElementById("city")
const browsertext = document.getElementById("browser")
const ostext = document.getElementById("os")
const doxximg = document.getElementById("doxximg")
const body = document.body;

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

// get a random number
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};

// get a random image
const images = ["assets/caterpillar.png",
  "assets/eminem.png",
  "assets/fenc.png",
  "assets/woo.jpg"];

body.style.backgroundImage = `url('${images[randomNumber(0, images.length)]}')`

// get geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    coordstext.innerHTML = `${position.coords.latitude}, ${position.coords.longitude} `
    content.style.opacity = 1;
    const audio = new Audio('assets/doxx.mp3');
    audio.loop = true;
    audio.play()
  }, err => alert("A C C E P T"))
}

// fetch some shit and update the html
fetch('https://myip.wtf/json')
  .then((response) => response.json())
  .then((data) => {
    const ip = data.YourFuckingIPAddress;
    const isp = data.YourFuckingISP;
    const city = data.YourFuckingLocation;
    citytext.innerHTML = city;
    isptext.innerHTML = isp;
    iptext.innerHTML = ip;
  });

// update some more text and get the os out of the useragent
browsertext.innerHTML = `${getBrowser()} `
const os = userAgent.match(/\(([^)]+)\)/g)[0];
ostext.innerHTML = os.replace(/\(*\)*/g, "");

console.log(navigator)
// just for reference
