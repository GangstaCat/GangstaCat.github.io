import Jimp from "./jimp";

function scan() {
  try {
    let text = document.createElement("p");
    let file = document.getElementById("upload").files[0];
    if (!file) return text.innerHTML = "No file chosen!";

    Jimp.read("./" + file).then(async img => {
      let imageSize = img.bitmap.width * img.bitmap.height;
    });
    text.innerHTML = `${file} has ${imageSize} pixels.`;
  } catch (err) {
    alert("Something went wrong!")
    console.error(err)
  }
}
