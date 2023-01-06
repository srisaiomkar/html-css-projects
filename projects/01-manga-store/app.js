const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
