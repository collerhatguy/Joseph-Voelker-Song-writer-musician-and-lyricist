function reveal(songName) {
  var tab, tabcontent;
  tabcontent = document.querySelectorAll(".tabs .tab button");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tab = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tablinks.length; i++) {
    tab[i].className = tab[i].className.replace("active", "");
  }

  document.getElementById(songName).style.display = "block";
  this.className += "active";
}
