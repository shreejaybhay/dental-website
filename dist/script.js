// mobile navbar

const menu = document.getElementById("menu");
const closemenu = document.getElementById("close-menu");
const mobilenavdiv = document.getElementById("mobile-nav-div");

// add event listener for click on the hamburger icon to open/close the navigation bar
menu.addEventListener("click", () => {
  mobilenavdiv.style.transform = "translateY(0)";
  menu.style.display = "none";
  closemenu.style.display = "block";
  mobilenavdiv.style.boxShadow = "rgba(17, 24, 35, 0.689) 0px 15px 25px -5px";
});
closemenu.addEventListener("click", () => {
  mobilenavdiv.style.transform = "translateY(-100%)";
  menu.style.display = "block";
  closemenu.style.display = "none";
  mobilenavdiv.style.boxShadow = "none";
});

// mobile navbar end
