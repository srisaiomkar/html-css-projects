const dateElement = document.getElementById("date");
const year = new Date().getFullYear();
dateElement.innerHTML = `${year}`;

const navBtn = document.querySelector("#nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-nav-links");
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    navLinks.classList.remove("show-nav-links");
  });
});
