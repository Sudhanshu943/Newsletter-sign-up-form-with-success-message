const emailInput = document.getElementById("email-input");
const submitbtn = document.getElementById("submit-btn");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = emailInput.value;
  console.log("Button Clicked");
  console.log(value);
});

function inputValue() {}
inputValue();
