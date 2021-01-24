var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("grad");
var button = document.getElementById("random");

function changeColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randomColor() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  changeColor();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
button.addEventListener("click", randomColor);

randomColor();
