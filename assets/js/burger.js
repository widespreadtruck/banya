// ***************************
//  burger menu start
// **************************
const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');
const checkbox = document.getElementById("checkbox");

// const openCloseBurger = () => {
//     burgerIcon.classList.toggle("change");
//     if (checkbox.checked) {
//         burgerMenu.style.right = "0%";
//     } else {
//         burgerMenu.style.right = "-100%";
//     }
// }
burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("change");
    if (checkbox.checked) {
        burgerMenu.style.right = "0%";
    } else {
        burgerMenu.style.right = "-100%";
    }
}, false);

burgerIcon.addEventListener("touchstart", () => {
    burgerIcon.classList.toggle("change");
    if (checkbox.checked) {
        burgerMenu.style.right = "0%";
    } else {
        burgerMenu.style.right = "-100%";
    }
}, false);


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

// if (document.getElementById("myModal").style.display = "block") {
//     // checkbox.checked = false;
//     // openCloseBurger();
//     burgerIcon.style.display = 'none';
// }


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