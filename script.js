const emailBtn = document.querySelector(".email-btn");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const emailInput = document.querySelector(".email-input input");

emailBtn.addEventListener("click", () => {
  // Check if the email entered is valid
  if (!isValidEmail(emailInput.value)) {
    // If it's invalid, display the error message and error icon
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
  } else {
    // If it's valid, hide the error message and error icon
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
  }
});

function isValidEmail(email) {
  // Expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
