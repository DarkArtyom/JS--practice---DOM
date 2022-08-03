const enterNameEl = document.querySelector("#name-input");
const titleEl = document.querySelector("#name-output");
console.log(titleEl);

enterNameEl.addEventListener("input", (event) => {
  event.preventDefault;
  if (enterNameEl.value === "") {
    titleEl.textContent = `${titleEl.value}`;
  }
  titleEl.textContent = `${enterNameEl.value}`;
});
