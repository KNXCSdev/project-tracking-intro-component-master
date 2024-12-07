const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 640) {
    navList.classList.add("hidden");
  }
  if (window.innerWidth > 640) {
    navList.classList.remove("hidden");
  }
});

menu.addEventListener("click", function () {
  if (menu.src.includes("icon-hamburger.svg")) {
    menu.src = "images/icon-close.svg";
  } else {
    menu.src = "images/icon-hamburger.svg";
  }
  navList.classList.toggle("hidden");
});
