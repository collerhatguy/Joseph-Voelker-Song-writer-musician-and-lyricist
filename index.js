const songSlide = document.querySelectorAll(".song-slide");
var songNumber = 0;
const songHeader = document.getElementById("songDisplay");
const leftButton = document.getElementById("lButton");
const rightButton = document.getElementById("rButton");
const selectButton = document.getElementById("songChoice");

leftButton.addEventListener("click", revolveLeft);
rightButton.addEventListener("click", revolveRight);
selectButton.addEventListener("click", () => {
  this.value = "";
});
// set the first song to being desplayed
move(0);
// set the left button to invisible;
leftButton.style.display = "none";
function revolveRight() {
  if (songNumber >= songSlide.length - 2) rightButton.style.display = "none";
  if (songNumber < songSlide.length - 1) songNumber++;
  leftButton.style.display = "inline";
  pauseAll();
  move(songNumber);
}
function revolveLeft() {
  if (songNumber < 2) leftButton.style.display = "none";
  if (songNumber > 0) songNumber--;
  rightButton.style.display = "inline";
  pauseAll();
  move(songNumber);
}
function selectDirectly() {
  songNumber = selectButton.value;
  songNumber < songSlide.length - 2 ? rightButton.style.display = "inline" : rightButton.style.display = "none";
  songNumber <= 1 ? leftButton.style.display = "none" : leftButton.style.display = "inline";
  pauseAll();
  move(songNumber);
}
function move(num) {
  // have every song set to hidden
  songSlide.forEach((element) => {
    element.className = "song-slide";
  });
  // set chosen song to visible
  songSlide[num].className = "visible";

  // set header equal to song name
  songHeader.innerHTML = songSlide[num].id;
  songHeader.className = "";
  setTimeout(() => {
    songHeader.className = "visible";
  }, 1);
  num = selectButton.value;
}
function pauseAll() {
  songSlide.forEach((element) => {
    element.children[0].pause();
  });
}
