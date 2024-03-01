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


//faq

function onbtn() {
  document.getElementById("pdiv").style.display = "block";
  document.getElementById("plusbtn").style.display = "none";
  document.getElementById("minusbtn").style.display = "block";
}

function ofbtn() {
  document.getElementById("pdiv").style.display = "none";
  document.getElementById("plusbtn").style.display = "block";
  document.getElementById("minusbtn").style.display = "none";
}

function onbtn1() {
  document.getElementById("pdiv1").style.display = "block";
  document.getElementById("plusbtn1").style.display = "none";
  document.getElementById("minusbtn1").style.display = "block";
}

function ofbtn1() {
  document.getElementById("pdiv1").style.display = "none";
  document.getElementById("plusbtn1").style.display = "block";
  document.getElementById("minusbtn1").style.display = "none";
}

function onbtn2() {
  document.getElementById("pdiv2").style.display = "block";
  document.getElementById("plusbtn2").style.display = "none";
  document.getElementById("minusbtn2").style.display = "block";
}

function ofbtn2() {
  document.getElementById("pdiv2").style.display = "none";
  document.getElementById("plusbtn2").style.display = "block";
  document.getElementById("minusbtn2").style.display = "none";
}

function onbtn3() {
  document.getElementById("pdiv3").style.display = "block";
  document.getElementById("plusbtn3").style.display = "none";
  document.getElementById("minusbtn3").style.display = "block";
}

function ofbtn3() {
  document.getElementById("pdiv3").style.display = "none";
  document.getElementById("plusbtn3").style.display = "block";
  document.getElementById("minusbtn3").style.display = "none";
}