//variable declarations

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


var started = false;
var gameIndex = 0;



//listens for a keydown to start the game
$(document).on("click", function(){
  if (!started){
    $("h1").text("Level 1");
    setTimeout(function(){nextSequence()}, 800);

    started=true;
  }
});



//event that triggers when a button is clicked. also adds to userClickedPattern
$(".btn").click(function(event){
  var userChosenColor = $(this).attr("id");
  flashAndPlay(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

//added animation to a clicked button
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
  $("#" + currentColor).removeClass("pressed");
}, 200);
}



//Check Answer
function checkAnswer(currentLevel){

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }
  else {
        $("body").addClass("game-over");
        playColorSound("wrong");
        $("h1").text("Game Over, Press Any Key To Restart")
        restart();
    setTimeout(function(){
          $("body").removeClass("game-over");
    },200);

  }
}




//RNG between 0-3, adds new color to gamePattern, and plays/flashes correct button
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  gameIndex++;
  $("h1").text("Level " + gameIndex);

  flashAndPlay(randomChosenColor);

}

function restart(){
  gameIndex = 0;
  gamePattern = [];
  started = false;
}


//function that flashes buttons and plays sound of color passed in
function flashAndPlay(color){
  flashColor(color);
  playColorSound(color);
}

//function that flashes a button with color passed in
function flashColor(color){
    // $("#" + randomChosenColor).fadeOut(100).fadeIn(100);//another way of flashing the button
  $("#" + color)
    .animate({opacity : 0.4}, 200)
    .animate({opacity : 1}, 200);
};

// function that plays the mp3 of the color passed in
function playColorSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.volume=0.08;
    audio.play();
};
