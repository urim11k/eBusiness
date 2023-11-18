function submitForm(form) {
    alert("Thank you for contacting us. Your form has been sent and we will contact you shortly.");

    // Reset the form after showing the message
    form.reset();

    // Prevent the default form submission
    return false;
}
