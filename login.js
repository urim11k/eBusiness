
// Function executed after the page is loaded
window.onload = function() {
    // Make sure the login form is hidden
    closeLoginForm();
  };
  
  // Open the login form floating layer
  function openLoginForm() {
      document.getElementById('loginForm').style.display = 'block';
  }
  
  // Close the login form floating layer
  function closeLoginForm() {
      document.getElementById('loginForm').style.display = 'none';
  }
  
