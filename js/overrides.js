window.addEventListener('DOMContentLoaded', () => {
  loadTemplate('Article')
    .then(loadStyle)
    .catch(e => loadTemplate('Error'))
});

async function loadTemplate(name) {
  const template = window.templates['template' + name];
  const target = document.getElementById('content');
  target.innerHTML = '';
  target.appendChild(template.cloneNode(true));
}

async function loadStyle() {
  const response = await fetch('css/overrides.css');
  const cssSnippet = await response.text();
  const styleSheet = new CSSStyleSheet();
  await styleSheet.replace(cssSnippet);
  document.adoptedStyleSheets = [styleSheet];
}

const script = document.getElementById('overrides-script');
script.parentElement.removeChild(script);
