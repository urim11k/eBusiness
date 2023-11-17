
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
  


document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/website_login/index.php"; // Please make sure this is the correct path to the PHP script that handles login
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("loginResult").innerHTML = xhr.responseText;
    }
  };

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var data = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);
  xhr.send(data);
});



