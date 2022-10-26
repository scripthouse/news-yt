let toggle = document.querySelector(".toggle-button");
let toggleIcon = document.querySelector(".toggle-icon");
let nav = document.querySelector(".header nav");

/* OOPTION 1 */
toggle.addEventListener("click", function () {
  //   If nav element already contains a class of active
  if (nav.classList.contains("active")) {
    nav.classList.remove("active"); // removes the class
    toggleIcon.src = "./images/icon-menu.svg"; // change icon
  } else {
    // add 'active' class to nav element
    nav.classList.add("active");
    toggleIcon.src = "./images/icon-menu-close.svg";
  }
});

/* OPTION 2 */
// toggle.addEventListener("click", function () {
//   if (nav.classList.contains("active")) {
//     toggleIcon.src = "./images/icon-menu-close.svg";
//   } else {
//     toggleIcon.src = "./images/icon-menu.svg";
//   }
//   nav.classList.toggle("active");
// });

/* Note: Minor Issue in delay for option 2 */
