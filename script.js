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


