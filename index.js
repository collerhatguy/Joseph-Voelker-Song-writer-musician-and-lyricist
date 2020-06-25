const songSlide = document.querySelectorAll(".song-slide");
var songNum = 0;
function revolveR() {
  if (songNum < songSlide.length) {
    songNum++;
  }
  console.log(songNum);
  move(songNum);
}
function revolveL() {
  if (songNum > 0) {
    songNum--;
  }
  console.log(songNum);
  move(songNum);
}
function selectS(e) {
  // stopps page from reseting//
  e.preventDefault();
  // selects song choice and sets display equal to
  var f = document.getElementById("songChoice");
  songNum = f.value;
  console.log(songNum);
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
  document.getElementById("sTitle").innerHTML = songSlide[num].id;
}
function playSong() {
  var song = document.querySelector(".song-slide-main").children;
  song[0].play();
}
function pauseSong() {
  var song = document.querySelector(".song-slide-main").children;
  song[0].pause();
}
