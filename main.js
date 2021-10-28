const menuButton = document.querySelector('.nav_menu_button');
const menuItems = document.querySelector('.nav_menu_list');

let menuOpen = true;

menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuItems.classList?.remove('onMenuClick');
        menuOpen = true;
    }
    else {
        menuItems.classList?.add('onMenuClick');
        menuOpen = false;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});