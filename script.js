// Button on the home page
function sayHello() {
    alert("Hello! Welcome to my website 😊");
}

// Contact form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    event.target.reset();
}
