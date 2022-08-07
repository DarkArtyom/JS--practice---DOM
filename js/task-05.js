const enterNameEl = document.querySelector("#name-input");
const titleEl = document.querySelector("#name-output");

enterNameEl.addEventListener("input", (event) => {
  if (enterNameEl.value.trim() === "") {
    titleEl.textContent = "Anonymous";
  } else {
    titleEl.textContent = enterNameEl.value.trim();
  }
});
