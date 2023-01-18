const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-header");
  const menuOverlay = document.querySelector(".menu-overlay");
  const htmlEl = document.querySelector("html");
  const bodyEl = document.querySelector("body");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //burger animation
    burger.classList.toggle("toggle");
    //toggle landscape
    menuOverlay.classList.toggle("active");
    //toggle to stop scrolling when burger is active
    htmlEl.classList.toggle("no-scroll");
    bodyEl.classList.toggle("no-scroll");
  });
};
navSlide();

function toggleMenuR() {
  let menur = document.getElementById("menur");
  let arrowR = document.getElementById("arrow-down-r");
  arrowR.classList.toggle("arrow-up");
  menur.classList.toggle("dp-menu-open");
}
function toggleMenuL() {
  let menul = document.getElementById("menul");
  let arrowL = document.getElementById("arrow-down-l");

  arrowL.classList.toggle("arrow-up");
  menul.classList.toggle("dp-menu-open");
}

// const btnNavDrop = document.querySelector(".btn-dropdown");
// const ulMenu = document.querySelector(".dp-menu");
// // const arrow = document.querySelector(".arrow-down");

// btnNavDrop.addEventListener("click", function () {
//   ulMenu.classList.toggle("dp-menu-open");
//   // arrow.classList.toggle("arrow-up");
// });

// RECENT ONE
// const btnNavDrop = document.querySelectorAll(".btn-dropdown");
// const ulMenu = document.querySelectorAll(".dp-menu");
// // const arrow = document.querySelector(".arrow-down");
// btnNavDrop.forEach(function (btnDrop) {
//   btnDrop.addEventListener("click", function () {
//     ulMenu.forEach(function (ulMenus) {
//       ulMenus.classList.toggle("dp-menu-open");
//       console.log(ulMenus);
//     });
//     // ulMenuLi.classList.toggle("dp-menu-open");
//     console.log(ulMenu);
//   });
// });
// const btnNavDrop = document.querySelectorAll(".btn-dropdown");
// btnNavDrop.forEach((papa) => {
//   papa.addEventListener("click", function () {
//     ulMenu.classList.toggle("dp-menu-open");
//   });
// });
