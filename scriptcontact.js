const message = "Merci pour votre message, à bientôt.";
const contact = document.getElementById("form-contact")

contact.addEventListener("submit", function (event) {
     event.preventDefault();
     console.log(message);
});