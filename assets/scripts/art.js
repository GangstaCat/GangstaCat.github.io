const rng = (min, max) => {
  return Math.floor(Math.random() * max + min)
}

let loadedArt = ["/assets/img/AI1.png",
  "/assets/img/AI2.PNG",
  "/assets/img/angy_as_fuk.png",
  "/assets/img/baguette.png",
  "/assets/img/bluenyancat.png",
  "/assets/img/bread_love.jpg",
  "/assets/img/cta.png",
  "/assets/img/furry_loaf.png",
  "/assets/img/loafcate.png",
  "/assets/img/trumpet_intensifies.jpeg"];

let artImg = document.getElementById("artImg")
let current = loadedArt[rng(0, loadedArt.length)]
let prev = current;
function loadRandArt() {
  current = loadedArt[rng(0, loadedArt.length)];
  if (current === prev) {
    loadRandArt()
  } else {
    artImg.setAttribute("src", `${current}`)
    prev = current;
  }
}

artImg.addEventListener("click", loadRandArt)

