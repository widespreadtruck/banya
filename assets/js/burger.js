// ***************************
//  burger menu start
// **************************

// const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');
const checkbox = document.getElementById("checkbox");

const openCloseBurger = () => {
    burgerIcon.classList.toggle("change");
    if (checkbox.checked) {
        burgerMenu.style.transform = "translateX(-100%)";
    } else {
        burgerMenu.style.transform = "translateX(0%)";
    }
}

const menuItems = document.querySelectorAll("#burgerMenu a");

menuItems.forEach(function (navElement) {
    navElement.onclick = function () {
        checkbox.checked = false;
        openCloseBurger();
    }
});

window.onclick = function(event) {
    if (event.target == burgerMenu) {
        checkbox.checked = false;
        openCloseBurger();
    }
};


// ***************************
//  burger menu end
// **************************

// document.addEventListener('click', function(event) {
//     if (!event.target.closest(".burgerMenu")) return;
    
//     checkbox.checked = false;
//     openCloseBurger();
    
// }, false)


// const openCloseBurger = () => {
//     document.getElementById('burgerIcon').classList.add("change");
// }

// const burger = document.getElementById('burgerIcon');
// burger.onclick = function() {
//     document.getElementById('burgerIcon').classList.toggle('change')
// }