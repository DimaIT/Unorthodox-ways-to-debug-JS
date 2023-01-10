const termsCheckbox = document.getElementById('terms');
let termsAccepted = false;

termsCheckbox.onchange = () => {
  termsCheckbox.removeAttribute('aria-invalid');
  termsAccepted = termsCheckbox.value;
};

function next() {
  if (termsAccepted !== true && !localStorage.presentationMode) {
    console.log('termsAccepted:', termsAccepted);
    termsCheckbox.setAttribute('aria-invalid', 'true');
    alert('Accept terms first!');
    return;
  }

  location.href = 'log-debugger.html';
}
