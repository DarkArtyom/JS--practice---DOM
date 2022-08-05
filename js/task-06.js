const getName = document.querySelector("input");

getName.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (getName.value.length === Number(getName.dataset.length)) {
    getName.classList.add("valid");
    getName.classList.remove("invalid");
  } else {
    getName.classList.add("invalid");
    getName.classList.remove("valid");
  }
}

// getName.value.length >= `${getName.dataset.length}` - if you need 6 or more
