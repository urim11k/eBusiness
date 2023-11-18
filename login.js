
// Function executed after the page is loaded
window.onload = function() {
  // Make sure the login form is hidden
  closeLoginForm();

  // Check user logged in status
  checkUserLoggedIn();

  // Event listener for login form submission
  

  // Event listener for account button click
  document.getElementById('accountButton').addEventListener('click', function() {
      var dropdown = document.getElementById('accountDropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });
};

// Open the login form floating layer
function openLoginForm() {
  document.getElementById('loginFormContainer').style.display = 'block';
}

// Close the login form floating layer
function closeLoginForm() {
  document.getElementById('loginFormContainer').style.display = 'none';
}

