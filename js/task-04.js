const actions = document.querySelectorAll("#counter button");
console.log(actions[0]);
const value = document.querySelector("#value");

let counterValue = 0;

actions[1].addEventListener("click", plusEl);
actions[0].addEventListener("click", minusEl);

function plusEl() {
  counterValue += 1;
  value.textContent = `${counterValue}`;
}

function minusEl() {
  counterValue += -1;
  value.textContent = `${counterValue}`;
}

// const minusEl = () => {
//   counterValue += -1;
//   value.textContent = `${counterValue}`;
// };
