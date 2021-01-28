$(function() {
    function burgerMenu() {
        let icon = $("#burgerIcon");
        let burgerMenu = $('#burgerMenu');
        let links = $("#burgerMenu").find(".burgerMenu__link");
        icon.on("click", (e)=>{
            e.preventDefault();
            toggleMenu();
        });

        links.on("click", () => toggleMenu());

        function toggleMenu() {
            icon.toggleClass("change");
            if (icon.hasClass("change")) {
                burgerMenu.css("right", "0%");
            } else {
                burgerMenu.css("right", "-100%");
            }
        };
    };

    burgerMenu();
});


