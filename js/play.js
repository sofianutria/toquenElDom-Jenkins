let C1 = document.getElementById("C1");
const soundC1 = new Audio("../assets/sounds/C1.wav");
function playNote() {
  soundC1.currentTime = 0;
  soundC1.play();
}
C1.addEventListener("click", playNote);
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    playNote();
  }
});
