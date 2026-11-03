// Pilihan 1 - Menu hamburger untuk layar ponsel
const tombol = document.querySelector(".tombol-menu");
const menu   = document.querySelector("nav ul");

tombol.addEventListener("click", function () {
  menu.classList.toggle("tampil");
});

// Pilihan 2 - Validasi tambahan pada form pemesanan
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const wa = document.querySelector("#wa").value;
  if (wa.length < 10) {
    e.preventDefault();
    alert("Nomor WhatsApp minimal 10 digit.");
  }
});