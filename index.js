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
  e.preventDefault();
  var f = document.getElementById("songChoice");
  songNum = f.value;
  console.log(songNum);
  move(songNum);
}
function move(num) {
  songSlide.forEach((element) => {
    element.className = "song-slide";
  });
  songSlide[num].className = "song-slide-main";
  document.getElementById("sTitle").innerHTML = songSlide[num].id;
}
