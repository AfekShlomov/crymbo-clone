import { formDataItem, formDataObject } from "../types";

const form = document.querySelector(".form-div form") as HTMLFormElement;
const fields: NodeListOf<HTMLInputElement | HTMLTextAreaElement> =
  form.querySelectorAll('input:not([type="checkbox"]), textarea');
const errorMessages: NodeListOf<HTMLParagraphElement> =
  form.querySelectorAll(".error-message");
const confirmationMessage = document.querySelector(
  ".confirmation-message"
) as HTMLParagraphElement;
const connectCheckbox = form.querySelector(
  'input[name="connect-checkbox"]'
) as HTMLInputElement;
const oracleCheckbox = form.querySelector(
  'input[name="oracle-checkbox"]'
) as HTMLInputElement;
const checkboxError = connectCheckbox
  .closest(".form-checkbox-div")!
  .querySelector(".error-message") as HTMLParagraphElement;


const formData: formDataObject = {};

updateFormData();
console.log(formData);

fields.forEach((field) => {
  field.addEventListener("input", () => {
    checkValidationOnInput(field.name);
  });
});

oracleCheckbox.addEventListener("change", () => {
  checkValidationOnInput("checkboxes");
});

connectCheckbox.addEventListener("change", () => {
  checkValidationOnInput("checkboxes");
});

function handleSubmit(event: Event) {
  event.preventDefault();
  updateFormData();

  Object.entries(formData).forEach(([key, data]) => {
    data.errorMessage.style.display = "none";
    const value = data.value!;

    if (value === "" && key !== "job" && key !== "information") {
      updateErrorMessage(data.errorMessage, "This field is required");
    } else if (key === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.value!)) {
        updateErrorMessage(
          data.errorMessage,
          "Please enter a valid email address"
        );
      }
    } else if (["first name", "last name"].includes(key)) {
      const namePattern = /^[a-zA-Z\s]+$/;
      if (!namePattern.test(value) || value.length < 2) {
        updateErrorMessage(data.errorMessage, "Please enter a valid " + key);
      }
    } else if (key === "company") {
      const namePattern = /^[a-zA-Z0-9\s]+$/;
      if (!namePattern.test(value) || value.length < 2) {
        updateErrorMessage(
          data.errorMessage,
          "Please enter a valid company name."
        );
      }
    } else if (key === "information" && data.value !== "") {
      if (value.length < 10) {
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
    value: null,
    connect: connectCheckbox.checked,
    oracle: oracleCheckbox.checked,
    errorMessage: checkboxError,
  };

  fields.forEach((field) => {
    const key = field.name;
    const value = field.value.trim();
    const errorMessage = field.parentElement!.querySelector(
      ".error-message"
    ) as HTMLParagraphElement;
    formData[key] = { value, errorMessage, connect: null, oracle: null };
  });
}

function validateErrorMessage(formDataItem: formDataItem) {
  // for when an input is being typed in, disables error message

  if (formDataItem.value === null) {
    if (formDataItem.oracle || formDataItem.connect) {
      updateErrorMessage(formDataItem.errorMessage, "");
    } else {
      updateErrorMessage(
        formDataItem.errorMessage,
        "please select at least one use case"
      );
    }
  } else if (formDataItem.value === "") {
    updateErrorMessage(formDataItem.errorMessage, "This field is required");
  } else {
    updateErrorMessage(formDataItem.errorMessage, "");
  }
}

function updateErrorMessage(errorElement, message) {
  // update error messages during submittion

  errorElement.textContent = message;
  errorElement.style.display = message === "" ? "none" : "block";
}

function checkValidationOnInput(fieldName: string) {
  updateFormData();
  const key = fieldName;
  validateErrorMessage(formData[key]);
}

form.addEventListener("submit", handleSubmit);

export {};
