const toggleBtn = document.querySelector(".navbar-toogleBtn");
const menu = document.querySelector(".navbar-menu");
const link = document.querySelector(".navbar-links");


toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    link.classList.toggle("active");
});