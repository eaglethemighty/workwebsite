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