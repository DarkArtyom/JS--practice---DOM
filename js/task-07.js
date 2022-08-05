const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputFontSize.addEventListener("input", onInputChange);

function onInputChange(event) {
  const sizeText = event.currentTarget.value;
  text.style.fontSize = `${sizeText}px`;
}
