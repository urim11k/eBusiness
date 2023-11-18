function submitForm(form) {
    alert("Thank you for contacting us. Your form has been sent and we will contact you shortly.");

    // Reset the form after showing the message
    form.reset();

    // Prevent the default form submission
    return false;
}

// Services Filter
function filterServices() {
    var category = document.getElementById("serviceFilter").value;
    var services = document.getElementsByClassName("service");
    
    for (var i = 0; i < services.length; i++) {
      if (category == "all" || services[i].dataset.category == category) {
        services[i].style.display = "";
      } else {
        services[i].style.display = "none";
      }
    }
  }
  
