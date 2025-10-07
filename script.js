function showMessage() {
  alert("Hallowwwwww");
}

var i = 0;
var txt = "Hallo Semua, Selamat datang di Website Saya!";
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("animasiPembukaan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

window.onload = function () {
  typewriter();
};
