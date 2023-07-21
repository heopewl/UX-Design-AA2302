

const TextOnPic = document.querySelector(".Title");
const hamburger = document.querySelector(".checkboxbutton");
hamburger.addEventListener("click",() =>{
    TextOnPic.style.animation = "fade_in 1s";
    TextOnPic.classList.toggle("active");
})