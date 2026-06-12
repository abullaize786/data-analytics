const fs = require('fs');

const loginLogic = `
// ==========================================
// LOGIN LOGIC
// ==========================================

function handleLogin(event) {
  event.preventDefault();
  
  const loginOverlay = document.getElementById('loginOverlay');
  const appContainer = document.getElementById('appContainer');
  const spinner = document.getElementById('loginSpinner');
  const btnText = document.querySelector('.login-btn-text');
  
  if (spinner) spinner.style.display = 'inline-block';
  if (btnText) btnText.style.display = 'none';

  // Simulate network request
  setTimeout(() => {
    if (loginOverlay) {
      loginOverlay.style.opacity = '0';
      setTimeout(() => {
        loginOverlay.style.display = 'none';
        if (appContainer) {
          appContainer.style.display = 'flex';
          // Initialize dashboard if needed
          if (typeof renderDashboard === 'function') {
            renderDashboard();
          }
        }
      }, 300);
    }
  }, 800);
}

function toggleLoginPassword(btn) {
  const input = document.getElementById('loginPassword');
  const eyeOpen = btn.querySelector('.eye-open');
  const eyeClosed = btn.querySelector('.eye-closed');
  
  if (input.type === 'password') {
    input.type = 'text';
    if(eyeOpen) eyeOpen.style.display = 'none';
    if(eyeClosed) eyeClosed.style.display = 'block';
  } else {
    input.type = 'password';
    if(eyeOpen) eyeOpen.style.display = 'block';
    if(eyeClosed) eyeClosed.style.display = 'none';
  }
}

// Ensure the function is available globally
window.handleLogin = handleLogin;
window.toggleLoginPassword = toggleLoginPassword;
`;

fs.appendFileSync('app.js', '\n' + loginLogic);
console.log("Appended login logic to app.js");
