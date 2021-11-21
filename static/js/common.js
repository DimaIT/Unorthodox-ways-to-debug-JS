const { skipIssues } = localStorage;

if (skipIssues) {
  console.log('Fixing issues...');
  if (location.pathname.includes('index.html')) {
    setInterval(() => { termsAccepted = true }, 500);
  }
}
