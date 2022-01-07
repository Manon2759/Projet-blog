const hamburger = document.querySelector(".hamburger")
const blocUl = document.querySelector(".bloc-ul")
const logo = document.querySelector(".containerlogo")


hamburger.addEventListener("click", function () {
     blocUl.classList.toggle("display-flex")
     blocUl.classList.toggle("display-none")

     logo.classList.toggle("display-flex")
     logo.classList.toggle("display-none")
})
/*
const user = prompt("Es-tu diagnotiqué Dermatomyosite?")

if(user === "Oui"){
     console.log("Bienvenue, Tu trouveras ici quelques réponses à tes questions !")
}
else(user === "Non"); {
     console.log("Bonjour, n'hésite pas à lire le contenu et poser tes questions si tu le souhaites!")
};*/

const message = "Merci pour votre message, à bientôt.";
const contact = document.getElementById("form-contact")

contact.addEventListener("submit", function (event) {
     event.preventDefault();
     console.log(message);
});

const yeux = "images/yeux.jpeg";
const peau = [
     "images/doigts 1.jpeg",
     "images/doigts.jpeg",
     "images/papules.jpeg",
     "images/mains.jpeg",
     "images/bras.jpeg",
     "images/jambes.jpeg",
];
const poumons = "images/poumons.jpeg";

const imgSelect = document.getElementById("img-select")
const list = document.getElementById("img-list")

imgSelect.addEventListener("change", function (event) {
     img.innerHTML = ""
     if (event.target.value === "yeux") {
          for (let index = 0; index < yeux.length; index++)
               const imgage = document.createElement("img")
          image.src = yeux[index]
          list.appendChild(image)
     }

     else if (event.target.value === "peau") {
          for (let index = 0; index < peau.length; index++) {
               const image = document.createElement('img')
               image.src = peau[index]
               list.appendChild(image)
          }
     }
     else if (event.target.value === "poumons") {
          for (let index = 0; index < poumons.length; index++) {
               const image = document.createElement('img')
               image.src = poumons[index]
               list.appendChild(image)
          }
     }
})

