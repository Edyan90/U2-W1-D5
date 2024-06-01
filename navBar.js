const navBar = document.querySelector(".navBar");
const buttons = navBar.querySelectorAll("button");
const black = document.getElementById("btnBlack");
console.log(navBar);
console.log(buttons);
console.log(buttons[4]);
window.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > 200) {
    navBar.classList.add("navBarWhite");
    black.removeAttribute("id");
    black.setAttribute("id", "btnGreen");
    buttons.forEach((button) => {
      button.classList.add("btnWhite");
    });
  } else {
    navBar.classList.remove("navBarWhite");
    black.removeAttribute("id");
    buttons.forEach((button) => {
      button.classList.remove("btnWhite");
    });
  }
};
