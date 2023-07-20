const TextOnPic = document.querySelector(".Title");
const hamburger = document.querySelector(".checkboxbutton");
hamburger.addEventListener("click",() =>{
    TextOnPic.style.animation = 
    TextOnPic.classList.toggle("active");
})