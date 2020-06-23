const tabContents = document.querySelectorAll("[data-content]");
var songNum = 0;
function revolveR() {
  if (songNum < tabContents.length) {
    songNum++;
  }
  console.log(songNum);
}
function revolveL() {
  if (songNum > 0) {
    songNum--;
  }
  console.log(songNum);
}
function selectS() {
  songNum = document.getElementById("#songChoice").nodeValue;
}
