var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "️🎖️ Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎖️"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
