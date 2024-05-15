// untuk menampilkan dan menyembunyikan menu navigasi saat tombol hamburger diklik.
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });
});
