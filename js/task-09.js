function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bg = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");

btn.addEventListener("click", onChangeBg);

function onChangeBg() {
  bg.textContent = getRandomHexColor();
  body.style.backgroundColor = bg.textContent;
}
