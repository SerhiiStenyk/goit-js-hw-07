const validationForm = document.querySelector('#validation-input');
validationForm.addEventListener('blur', onValidationFormBlur);
const validLength = validationForm.dataset.length;
function onValidationFormBlur(event) {
  const data = validationForm.value;
  if (data.length >= validLength) {
    validationForm.classList.add('valid');
    validationForm.classList.remove('invalid');
  } else {
    validationForm.classList.add('invalid');
    validationForm.classList.remove('valid');
  }
}
