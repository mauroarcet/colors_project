var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected")
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
    }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //Add initial color to squares
  squares[i].style.backgroundColor = colors[i];

  //Add event listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      messageDisplay.style.color = "green";
      messageDisplay.textContent = "Correct baby!";
      resetButton.textContent = "Play Again?";
    } else {
      // Set color to background color of the document when wrong
      this.style.backgroundColor = "#69656f";
      messageDisplay.textContent = "Try Again";
      messageDisplay.style.color = "red";
    }
  });
}

function getRandomColor() {
  //Pick a Red, Green and Blue
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return random;
}

function generateRandomColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}

resetButton.addEventListener("click", function() {
    var colors = generateRandomColors(6);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});
