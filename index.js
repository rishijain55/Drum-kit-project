var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var tone = this.innerHTML;
    console.log(this.innerHTML);
    sound(tone);
    addAnimation(tone);
  });
  document.addEventListener("keypress", function (event) {
    var tok = event.key;
    var pok = tok.toLowerCase();
    console.log(pok);
    sound(pok);
    addAnimation(pok);
  });
}

function sound(tone) {
  switch (tone) {
    case "w":
      var aud = new Audio("sounds/tom-1.mp3");
      aud.play();
      break;
    case "a":
      var aud = new Audio("sounds/tom-2.mp3");
      aud.play();
      break;
    case "s":
      var aud = new Audio("sounds/tom-3.mp3");
      aud.play();
      break;
    case "d":
      var aud = new Audio("sounds/tom-4.mp3");
      aud.play();
      break;
    case "j":
      var aud = new Audio("sounds/crash.mp3");
      aud.play();
      break;
    case "k":
      var aud = new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;
    case "l":
      var aud = new Audio("sounds/snare.mp3");
      aud.play();
      break;
  }
}
function addAnimation(keyword) {
  document.getElementsByClassName(keyword)[0].classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + keyword).classList.remove("pressed");
  }, 100);
}
