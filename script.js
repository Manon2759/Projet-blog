const hamburger = document.querySelector(".hamburger")
const blocUl = document.querySelector(".bloc-ul")
const navLink = document.querySelectorAll(".nav-link")
const logo = document.querySelector(".containerlogo")


hamburger.addEventListener("click", function () {
    if (hamburger.style.display === "block") {
        logo.style.display = "none" 
        blocUl.style.display = "flex"
    }
    else {
        hamburger.style.display = "block"
        logo.style.display = "block"
        blocUl.style.display = "none"
    }
})

