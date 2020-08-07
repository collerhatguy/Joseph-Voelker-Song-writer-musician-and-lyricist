const songSlide = document.querySelectorAll(".song-slide");
var songNum = -1;
const songHeader = document.getElementsByClassName("hidden")[0];
import { revolveL, revolveR } from "./revolve.js";

revolveL();
revolveR();

function selectS(e) {
  // stopps page from reseting
  e.preventDefault();
  // selects song choice and sets display equal to
  var f = document.getElementById("songChoice");
  songNum = f.value;
  pauseAll();
  move(songNum);
}
function move(num) {
  // have every song set to hidden
  songSlide.forEach((element) => {
    element.className = "song-slide";
  });
  // set chosen song to visible
  songSlide[num].className = "song-slide-main";

  // set header equal to song name
  songHeader.innerHTML = songSlide[num].id;
  songHeader.className = "";
}
function playSong() {
  var song = document.querySelector(".song-slide-main").children;
  song[0].play();
}
function pauseSong() {
  var song = document.querySelector(".song-slide-main").children;
  song[0].pause();
}
function pauseAll() {
  songSlide.forEach((element) => {
    element.children[0].pause();
  });
}
