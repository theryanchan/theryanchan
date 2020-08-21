// Checking for mouse clicks on buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    checkKeyAndPlayAudio(this.innerHTML);
    // interacted(event.key);
  });
}

// checking for keyboard presses
document.addEventListener("keydown", function() {


  // this.classList.add(drum-keyed);
  checkKeyAndPlayAudio(event.key);
  // interacted(event.key);
});

// //function to change color when interacted with
// function interacted(keyValue) {
//   switch (keyValue) {
//     case "w":
//       document.querySelector(".w").classList.add("drum-keyed");
//       document.querySelector(".w").addEventListener("keyup", leave() {
//         document.querySelector(".w").remove("drum-keyed");
//       break;
//
//     case "a":
//       document.querySelector(".a").classList.add("drum-keyed");
//       document.querySelector(".a").addEventListener("keyup", leave() {
//         document.querySelector(".a").remove("drum-keyed");
//       break;
//
//     case "s":
//
//       document.querySelector(".s").classList.add("drum-keyed");
//       document.querySelector(".s").addEventListener("keyup", leave() {
//         document.querySelector(".s").remove("drum-keyed");
//       break;
//
//     case "d":
//
//       document.querySelector(".d").classList.add("drum-keyed");
//       document.querySelector(".d").addEventListener("keyup", leave() {
//         document.querySelector(".d").remove("drum-keyed");
//     break;
//
//     case "j":
//       document.querySelector(".j").classList.add("drum-keyed");
//       document.querySelector(".j").addEventListener("keyup", leave() {
//         document.querySelector(".j").remove("drum-keyed");
//     break;
//
//     case "k":
//
//       document.querySelector(".k").classList.add("drum-keyed");
//       document.querySelector(".k").addEventListener("keyup", leave() {
//         document.querySelector(".k").remove("drum-keyed");
//     break;
//
//     case "l":
//       document.querySelector(".l").classList.add("drum-keyed");
//       document.querySelector(".l").addEventListener("keyup", leave() {
//         document.querySelector(".l").remove("drum-keyed");
//     break;
//
//     default:
//       console.log(buttonInnerHTML);
//
//   }
//
// }

//function to assign keyboard presses
function checkKeyAndPlayAudio(keyValue) {
  switch (keyValue) {
    case "w":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;

    case "a":
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;

    case "s":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;

    case "d":
      var t1Audio = new Audio("sounds/tom-1.mp3");
      t1Audio.play();
      break;

    case "j":
      var t2Audio = new Audio("sounds/tom-2.mp3");
      t2Audio.play();
      break;
    case "k":
      var t3Audio = new Audio("sounds/tom-3.mp3");
      t3Audio.play();
      break;
    case "l":
      var t4Audio = new Audio("sounds/tom-4.mp3");
      t4Audio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}
