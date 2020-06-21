function reveal(songName) {
  var tab, tabcontent;
  tabcontent = document.querySelectorAll(".tabs .tab button");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

<<<<<<< HEAD
  tab = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tablinks.length; i++) {
=======
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
>>>>>>> fec5a06f1b334858fd53a646fc0e9f8f29e95e31
    tab[i].className = tab[i].className.replace("active", "");
  }

  document.getElementById(songName).style.display = "block";
  this.className += "active";
}
