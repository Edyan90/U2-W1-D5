window.onload = (event) => {
  console.log("page is fully loaded");
};

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

window.onload = function () {
  const M = document.getElementsByTagName("g");
  console.log(M.length);
  for (let i = 0; i < M.length; i++) {
    let opacityCasuale = Math.floor(Math.random() * 2);
    console.log(opacityCasuale);
    M[i].setAttribute("style", `opacity: ${opacityCasuale}`);
  }
  setInterval(() => {
    let indexM = Math.floor(Math.random() * M.length);
    let currentOpacity = parseFloat(M[indexM].style.opacity);
    let newOpacity = currentOpacity === 0 ? 1 : 0;
    M[indexM].setAttribute("style", `opacity: ${newOpacity}`);
  }, 300);
};
