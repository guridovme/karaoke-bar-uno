const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-items");

function burgerActivationHandler() {
    burgerMenu.classList.toggle("burger-active");
};


burgerBtn.addEventListener("click",burgerActivationHandler);