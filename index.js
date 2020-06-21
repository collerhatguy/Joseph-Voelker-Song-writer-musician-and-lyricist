function reveal(songName) {
  var tab, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace("active", "");
  }

  document.getElementById(songName).style.display = "block";
  this.className += "active";
}
