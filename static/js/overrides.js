const loadAction = 'LoadLater';
window.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('content');
  let code = window[`to${loadAction}`];
  safeAppendHtml(element, code);
});

function safeAppendHtml(element, code) {
  if (element && element instanceof HTMLElement && typeof code === 'string') {
    element.innerHTML += code;
  }
}

const script = document.getElementById('overrides-script');
script.parentElement.removeChild(script);
