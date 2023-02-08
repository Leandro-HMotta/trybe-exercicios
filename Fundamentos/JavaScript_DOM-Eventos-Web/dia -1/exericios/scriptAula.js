document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor =
  "pink";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor =
  "yellow";
const hColor = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < hColor.length; index += 1) {
  hColor[index].style.backgroundColor = "purple";
}

const color = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < color.length; index += 1) {
  color[index].style.backgroundColor = "black";
}

document.getElementById("footer-container").style.backgroundColor = "green";
