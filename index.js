const songSlide = document.querySelectorAll(".song-slide");
var songNumber = 0;
const songHeader = document.getElementById("songDisplay");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
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
  isRightMostCheck();
  if (songNumber < songSlide.length - 1) songNumber++;
  leftButton.style.display = "inline";
  pauseAll();
  move(songNumber);
}
function revolveLeft() {
  isLeftMostCheck()
  if (songNumber > 0) songNumber--;
  rightButton.style.display = "inline";
  pauseAll();
  move(songNumber);
}
function selectDirectly() {
  songNumber = selectButton.value;
  isRightMostCheck();
  isLeftMostCheck();
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
}
function pauseAll() {
  songSlide.forEach((element) => {
    element.children[0].pause();
  });
}
function isLeftMostCheck() {
  if (songNumber < 2) leftButton.style.display = "none";
}
function isRightMostCheck() {
  if (songNumber >= songSlide.length - 2) rightButton.style.display = "none";
}
