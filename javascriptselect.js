const yeux = ["images/yeux.jpeg"];

const peau = [
     "images/doigts 1.jpeg",
     "images/doigts.jpeg",
     "images/doigts 3.jpeg",
     "images/main 2.jpeg",
     "images/papules.jpeg",
     "images/mains.jpeg",
     "images/bras.jpeg",
     "images/jambes.jpeg",
     
];
const poumons = ["images/poumons.jpeg"];

const imgSelect = document.getElementById("img-select")
const list = document.getElementById("img-list")

imgSelect.addEventListener("change", function(event) {
     list.innerHTML= ""
     if (event.target.value === "yeux") {
          for (let index = 0; index < yeux.length; index++) {
               const image = document.createElement("img")
               image.src = yeux[index]
               image.classList.add("images-selector")
               list.appendChild(image)
          }
     }
     else if (event.target.value === "peau") {
          for (let index = 0; index < peau.length; index++) {
               const image = document.createElement('img')
               image.src = peau[index]
               image.classList.add("images-selector")
               list.appendChild(image)
          }
     }
     else if (event.target.value === "poumons") {
          for (let index = 0; index < poumons.length; index++) {
               const image = document.createElement('img')
               image.src = poumons[index]
               image.classList.add("images-selector")
               list.appendChild(image)
          }
     }
})

