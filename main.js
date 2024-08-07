const signupSection = document.getElementById("signup-section-container");
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const successSection = document.getElementById("success-section-container");
const dismissButton = document.getElementById("dismiss-button");
const errorMessage = document.getElementById("email-error");

signupSection.style.display = "flex";
successSection.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (!validateEmail(email)) {
    errorMessage.textContent = 'Valid email required';
    errorMessage.style.display = 'block';
    emailInput.classList.add('invalid');
  } else {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('invalid');
    successSection.style.display = "flex";
    signupSection.style.display = "none";
  }
});

dismissButton.addEventListener("click", () => {
  successSection.style.display = "none";
  signupSection.style.display = "flex";
})

function validateEmail (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}