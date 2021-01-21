const songSlide = document.querySelectorAll(".song-slide");
var songNum = -1;
const songHeader = document.getElementById("songDisplay");
const leftButton = document.getElementById("lButton");
const rightButton = document.getElementById("rButton");
const selectButton = document.getElementById("songChoice");

leftButton.addEventListener("click", revolveL);
rightButton.addEventListener("click", revolveR);
selectButton.addEventListener("click", selectS);

function revolveR() {
  songNum < songSlide.length - 1 ? songNum++ : songNum = songNum;
  pauseAll();
  move(songNum);
}
function revolveL() {
  songNum > 0 ? songNum-- : songNum = songNum;
  pauseAll();
  move(songNum);
}
function selectS() {
  songNum = selectButton.value;
  pauseAll();
  move(songNum);
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
