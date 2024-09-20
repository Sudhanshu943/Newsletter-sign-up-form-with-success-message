const emailInput = document.getElementById("email-input");
const submitbtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-message");
const successContainer = document.getElementById("success-container");
const submitContainer = document.getElementById("submit-container");
const dismissBtn = document.getElementById("dismiss-btn");
const displayEmail = document.getElementById("display-email");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errorMessage.style.display = "none";
    emailInput.style.cssText = "none";
    submitContainer.style.display = "none";
    successContainer.style.display = "flex";
    displayEmail.innerHTML = ` <a href="mailto:${email}">${email}. </a>`;
  } else {
    errorMessage.style.display = "block";
    emailInput.style.cssText = `border: 1px solid red;
     background: rgba(243, 7, 7, 0.114);
    color:red`;
  }
});

dismissBtn.addEventListener("click", () => {
  submitContainer.style.display = "flex";
  successContainer.style.display = "none";
});
