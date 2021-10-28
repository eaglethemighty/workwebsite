const menuButton = document.querySelector('.nav_menu_button');
const menuItems = document.querySelector('.nav_menu_list');
const animationPicture = document.querySelector('.introduction_picture');
const animationStartButton = document.querySelector('.animation_compilation');
const globalSettings = document.querySelector('html');

let menuOpen = true;
let welcomeAnimationStarted = false;

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

animationStartButton.addEventListener('click', function (e) {
    e.preventDefault();

    if(!welcomeAnimationStarted)
    {
        welcomeAnimationStarted = true;

        globalSettings.classList?.add('waiting_cursor')
        WaitForCompilationAnimation();
    }


});

function WaitForCompilationAnimation() {
    setTimeout(function () {
        if (animationPicture.src == "multimedia/visual_studio_build.PNG") {
            return;
        }

        else {
            animationPicture.src = "multimedia/visual_studio_build.PNG";
            globalSettings.classList?.remove('waiting_cursor')
        }
    }, 2000);
}
