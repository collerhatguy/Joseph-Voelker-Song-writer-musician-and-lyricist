export function revolveR() {
  if (songNum < songSlide.length - 1) {
    songNum++;
  } else {
    songNum = songNum;
  }
  pauseAll();
  move(songNum);
}
export function revolveL() {
  if (songNum > 0) {
    songNum--;
  } else {
    songNum = songNum;
  }
  pauseAll();
  move(songNum);
}
