import Jimp from "jimp/*";
document.querySelector('button').addEventListener(img_scan);
window.img_scan = img_scan;

function img_scan() {
  try {
    let file = document.getElementById("upload").files[0];
    if (!file) return document.getElementById("output").innerHTML = "No file chosen!"
    Jimp.read("./" + file).then(async img => {
      let imageSize = img.bitmap.width * img.bitmap.height;
      document.getElementById("output").innerHTML = `${file} has ${imageSize} pixels.`
    });
  } catch (err) {
    alert("Something went wrong!")
    console.error(err)
  }
  return
}