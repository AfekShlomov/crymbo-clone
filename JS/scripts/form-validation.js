const form = document.querySelector(".form-main-div form");
const fields = form.querySelectorAll("input, textarea");
const errorMessages = form.querySelectorAll(".error-message");
const confirmationMessage = document.querySelector(".confirmation-message");
const connectCheckbox = form.querySelector('input[name="connect-checkbox"]');
const oracleCheckbox = form.querySelector('input[name="oracle-checkbox"]');
const checkboxError = connectCheckbox
  .closest(".form-main-div-checkbox")
  .querySelector(".error-message");

const formData = {};

function handleSubmit(event) {
  event.preventDefault();

  formData["checkboxes"] = {
    connect: connectCheckbox.checked,
    oracle: oracleCheckbox.checked,
    errorMessage: checkboxError,
  };

  fields.forEach((field) => {
    if (field.type !== "checkbox") {
      const key = field.name;
      const value = field.value.trim();
      const errorMessage = field.parentElement.querySelector(".error-message");
      formData[key] = { value, errorMessage };
    }
  });

  Object.entries(formData).forEach(([key, data]) => {
    data.errorMessage.style.display = "none";
    if (data.value === "" && key !== "job" && key !== "information") {
      data.errorMessage.textContent = "This field is required.";
      data.errorMessage.style.display = "block";
    } else if (key === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.value)) {
        data.errorMessage.textContent = "Please enter a valid email address.";
        data.errorMessage.style.display = "block";
      }
    } else if (["first name", "last name"].includes(key)) {
      const namePattern = /^[a-zA-Z\s]+$/;
      if (!namePattern.test(data.value) || data.value.length < 2) {
        data.errorMessage.textContent = "Please enter a valid " + key + ".";
        data.errorMessage.style.display = "block";
      }
    } else if (key === "company") {
      const namePattern = /^[a-zA-Z0-9\s]+$/;
      if (!namePattern.test(data.value) || data.value.length < 2) {
        data.errorMessage.textContent = "Please enter a valid company name.";
        data.errorMessage.style.display = "block";
      }
    } else if (key === "information" && data.value !== "") {
      if (data.value.length < 10) {
        data.errorMessage.textContent =
          "information must include at least 10 characters.";
        data.errorMessage.style.display = "block";
      }
    } else if (key === "checkboxes") {
      if (!data.connect && !data.oracle) {
        data.errorMessage.textContent = "please select at least one use case";
        data.errorMessage.style.display = "block";
      }
    }
  });

  if (Array.from(errorMessages).some((msg) => msg.style.display === "block")) {
    return;
  } else {
    confirmationMessage.style.display = "block";
    confirmationMessage.textContent = "Form submitted";
    form.reset();

    setTimeout(() => {
      confirmationMessage.style.display = "none";
    }, 5000);
    return;
  }
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmit);
