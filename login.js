
// Function executed after the page is loaded
window.onload = function() {
  // Make sure the login form is hidden
  closeLoginForm();

  // Check user logged in status
  checkUserLoggedIn();

  // Event listener for login form submission
  document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8080/website_login/loginHandler.php"; // Update this path if needed
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              document.getElementById("loginResult").innerHTML = xhr.responseText;
              // Re-check login status after login attempt
              checkUserLoggedIn();
          }
      };

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var data = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);
      xhr.send(data);
  });

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

// Function to check user login status
function checkUserLoggedIn() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log("Response from check_login_status.php: " + this.responseText); // Debug output
          if (this.responseText === "loggedIn") {
              document.getElementById('loginButton').style.display = 'none';
              document.getElementById('accountButton').style.display = 'block';
          } else {
              document.getElementById('loginButton').style.display = 'block';
              document.getElementById('accountButton').style.display = 'none';
          }
      }
  };
  xhr.open("GET", "http://localhost:8080/website_login/check_login_status.php", true); // Update this path if needed
  xhr.send();
}
