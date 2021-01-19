// Checking for mouse clicks on buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    checkKeyAndPlayAudio(this.innerHTML);

    animate(this.innerHTML);
  });
}

// checking for keyboard presses
document.addEventListener("keydown", function(event) {


  // this.classList.add(drum-keyed);
  checkKeyAndPlayAudio(event.key);
  animate(event.key);
});


//function to assign keyboard presses
function checkKeyAndPlayAudio(keyValue) {
  switch (keyValue) {
    case "w":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.volume=0.09;
      crashAudio.play();
      break;

    case "a":
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.volume=0.09;
      kickAudio.play();
      break;

    case "s":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.volume=0.09;
      snareAudio.play();
      break;

    case "d":
      var t1Audio = new Audio("sounds/tom-1.mp3");
      t1Audio.volume=0.09;
      t1Audio.play();
      break;

    case "j":
      var t2Audio = new Audio("sounds/tom-2.mp3");
      t2Audio.volume=0.09;
      t2Audio.play();
      break;
    case "k":
      var t3Audio = new Audio("sounds/tom-3.mp3");
      t3Audio.volume=0.09;
      t3Audio.play();
      break;
    case "l":
      var t4Audio = new Audio("sounds/tom-4.mp3");
      t4Audio.volume=0.09;
      t4Audio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}


//function to make animation when key is pressed or btn clicked on.
function animate(currentKey) {
  var pressedButton = document.querySelector("." + currentKey);
  pressedButton.classList.add("pressed");
  setTimeout(function() {
    pressedButton.classList.remove("pressed");
  }, 150);
}
