// add toggle element
const footer = document.querySelector('footer');
footer.innerHTML += `, <a id="mode-switch" onclick="toggleMode()">presentation mode</a>`;

function renderModeSwitch() {
  const modeSwitch = document.querySelector('#mode-switch');
  modeSwitch.innerText = (localStorage.presentationMode ? 'disable' : 'enable') + ' presentation mode';
}

function toggleMode() {
  if (localStorage.presentationMode) {
    delete localStorage.presentationMode;
  } else {
    localStorage.presentationMode = 'true';
  }
  renderModeSwitch();
}
renderModeSwitch();
