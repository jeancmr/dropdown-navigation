// const btnNavDrop = document.querySelector(".btn-dropdown");
// const ulMenu = document.querySelector(".dp-menu");
// // const arrow = document.querySelector(".arrow-down");

// btnNavDrop.addEventListener("click", function () {
//   ulMenu.classList.toggle("dp-menu-open");
//   // arrow.classList.toggle("arrow-up");
// });

const btnNavDrop = document.querySelectorAll(".btn-dropdown");
const ulMenu = document.querySelectorAll(".dp-menu");
// const arrow = document.querySelector(".arrow-down");
btnNavDrop.forEach(function (btnDrop) {
  btnDrop.addEventListener("click", function () {
    ulMenu.forEach(function (ulMenus) {
      ulMenus.classList.toggle("dp-menu-open");
      console.log(ulMenus);
    });
    // ulMenuLi.classList.toggle("dp-menu-open");
    console.log(ulMenu);
  });
});
// const btnNavDrop = document.querySelectorAll(".btn-dropdown");
// btnNavDrop.forEach((papa) => {
//   papa.addEventListener("click", function () {
//     ulMenu.classList.toggle("dp-menu-open");
//   });
// });
