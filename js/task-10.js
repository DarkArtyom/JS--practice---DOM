const boxes = document.querySelector("#boxes");
const buttons = document.querySelectorAll("#controls button");
const inputValue = document.querySelector("#controls input");

buttons[0].addEventListener("click", onButtonCreateClick);
buttons[1].addEventListener("click", destroyBoxes);

function onButtonCreateClick() {
  createBoxes(inputValue.value);
}

function createBoxes(amount) {
  destroyBoxes();
  const arrDiv = [];
  const baseSize = 30;
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const divCreate = document.createElement("div");
    divCreate.style.width = `${size}px`;
    divCreate.style.height = `${size}px`;
    divCreate.style.backgroundColor = `${getRandomHexColor()}`;
    arrDiv.push(divCreate);
  }
  boxes.append(...arrDiv);
}

function destroyBoxes() {
  boxes.innerHTML = " ";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
