

// logic for player 1 roll function (replaces current dice with new, correct one)
function p1Roll() {
  if (randomNumber1 == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    return;
  } else
  if (randomNumber1 == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    return;
  } else
  if (randomNumber1 == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    return;
  } else
  if (randomNumber1 == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    return;
  } else
  if (randomNumber1 == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    return;
  } else
  if (randomNumber1 == 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    return;
  }
}

//-----------------------------------------------------

// logic for player 2 roll function (replaces current dice with new, correct one)
function p2Roll() {
  if (randomNumber2 == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    return;
  } else
  if (randomNumber2 == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    return;
  } else
  if (randomNumber2 == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    return;
  } else
  if (randomNumber2 == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    return;
  } else
  if (randomNumber2 == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    return;
  } else
  if (randomNumber2 == 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    return;
  }
}

// ------------------------------------------------------------

// Game Logic
function matchResult(p1Number, p2Number) {

  if (p1Number == p2Number) {
    document.querySelector(".title-text").innerHTML = "<em>Tie Game! ⚡</em>";
    return;
  }
  if (p1Number > p2Number) {
    document.querySelector(".title-text").innerHTML = "<em>Player 1 Wins! 💲</em>";
    return;
  } else {
    document.querySelector(".title-text").innerHTML = "<em>Player 2 Wins! 🔥</em>";
    return;
  }

}

// Function Calls


function buttonClicked() {
  // PLayer 1 dice roll
  randomNumber1 = Math.ceil(Math.random() * 6);
  //player 2 dice roll
  randomNumber2 = Math.ceil(Math.random() * 6);
  //player 1 roll function call
  p1Roll();


  //player 2 roll function call
  p2Roll();
  matchResult(randomNumber1, randomNumber2);
}
// document.getElementByClassName(".roll-button").onclick = buttonClicked();
