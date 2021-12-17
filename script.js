const hamburger = document.querySelector(".hamburger")
const blocUl = document.querySelector(".bloc-ul")
const logo = document.querySelector(".containerlogo")


hamburger.addEventListener("click", function () {
     blocUl.classList.toggle("display-flex")
     blocUl.classList.toggle("display-none")

     logo.classList.toggle("display-flex")
     logo.classList.toggle("display-none")
})

