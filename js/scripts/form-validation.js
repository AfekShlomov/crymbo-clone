const form = document.querySelector(".form-main-div form");
const fields = form.querySelectorAll('input:not([type="checkbox"]), textarea');
const errorMessages = form.querySelectorAll(".error-message");
const confirmationMessage = document.querySelector(".confirmation-message");
const connectCheckbox = form.querySelector('input[name="connect-checkbox"]');
const oracleCheckbox = form.querySelector('input[name="oracle-checkbox"]');
const checkboxError = connectCheckbox
  .closest(".form-main-div-checkbox")
  .querySelector(".error-message");
const formData = {};

updateFormData();

fields.forEach((field) => {
  field.addEventListener("input", () => {
    updateFormData();
    const key = field.name;
    console.log(formData[key]);
    validateErrorMessage(formData[key]);
  });
});

function handleSubmit(event) {
  event.preventDefault();
  updateFormData();

  Object.entries(formData).forEach(([key, data]) => {
    data.errorMessage.style.display = "none";
    if (data.value === "" && key !== "job" && key !== "information") {
      updateErrorMessage(data.errorMessage, "This field is required");
    } else if (key === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.value)) {
        updateErrorMessage(
          data.errorMessage,
          "Please enter a valid email address"
        );
      }
    } else if (["first name", "last name"].includes(key)) {
      const namePattern = /^[a-zA-Z\s]+$/;
      if (!namePattern.test(data.value) || data.value.length < 2) {
        updateErrorMessage(data.errorMessage, "Please enter a valid " + key);
      }
    } else if (key === "company") {
      const namePattern = /^[a-zA-Z0-9\s]+$/;
      if (!namePattern.test(data.value) || data.value.length < 2) {
        updateErrorMessage(
          data.errorMessage,
          "Please enter a valid company name."
        );
      }
    } else if (key === "information" && data.value !== "") {
      if (data.value.length < 10) {
        updateErrorMessage(
          data.errorMessage,
          "information must include at least 10 characters"
        );
      }
    } else if (key === "checkboxes") {
      if (!data.connect && !data.oracle) {
        updateErrorMessage(
          data.errorMessage,
          "please select at least one use case"
        );
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

function updateFormData() {
  formData["checkboxes"] = {
    connect: connectCheckbox.checked,
    oracle: oracleCheckbox.checked,
    errorMessage: checkboxError,
  };

  fields.forEach((field) => {
    const key = field.name;
    const value = field.value.trim();
    const errorMessage = field.parentElement.querySelector(".error-message");
    formData[key] = { value, errorMessage };
  });
}

function validateErrorMessage(formDataItem) {
  // for when an input is being typed in, disables error message

  console.log(formDataItem)

  if (formDataItem.value === "") {
    updateErrorMessage(formDataItem.errorMessage, "This field is required");
  } else {
    updateErrorMessage(formDataItem.errorMessage, "");
  }
}

function updateErrorMessage(errorElement, message) {
  // update error messages during updates

  errorElement.textContent = message;
  errorElement.style.display = message === "" ? "none" : "block";
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmit);
