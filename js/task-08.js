const inputFormEl = document.querySelector("form");

inputFormEl.addEventListener("submit", onInputForm);

function onInputForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill the input");
  } else {
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(`Email: ${formData.email}, password: ${formData.password}`);
  }
  event.currentTarget.reset();
}
