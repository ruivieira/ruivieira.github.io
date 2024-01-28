function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return (
    "rgb(" +
    randomInt(0, 255) +
    "," +
    randomInt(0, 255) +
    "," +
    randomInt(0, 255) +
    ")"
  );
}

function setBackground() {
  var svg = document.getElementById("mysvg");
  var bgColor = getRandomColor();
  svg.style.backgroundColor = bgColor;
}

function createRandomCircles() {
  var svgNS = "http://www.w3.org/2000/svg";
  var svg = document.getElementById("mysvg");

  for (var i = 0; i < 5; i++) {
    var circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", randomInt(0, 50));
    circle.setAttribute("cy", randomInt(0, 50));
    circle.setAttribute("r", randomInt(2, 12));
    circle.setAttribute("fill", getRandomColor());
    svg.appendChild(circle);
  }
}

window.onload = function () {
  setBackground();
  createRandomCircles();
};
