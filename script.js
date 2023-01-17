const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-header");
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //burger animation
    burger.classList.toggle("toggle");
    //toggle landscape
    menuOverlay.classList.toggle("active");
  });
  // closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  // menuOverlay.addEventListener("click", function toggleNav() {
  //   // navMenu.classList.toggle("open");
  //   menuOverlay.classList.toggle("active");
  //   // document.body.classList.toggle("hidden-scrolling");
  // });
};
navSlide();

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
