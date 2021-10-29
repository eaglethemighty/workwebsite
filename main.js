const menuButton = document.querySelector('.nav_menu_button');
const menuItems = document.querySelector('.nav_menu_list');
const animationPicture = document.querySelector('.introduction_picture');
const animationStartButton = document.querySelector('.animation_compilation');
const globalSettings = document.querySelector('html');
const animationText = document.getElementById('welcome_text_div');
const about_me_article = document.getElementById('about_me_article')
const about_me_article_text = document.getElementById('about_me_article_text')
const about_me_button_menu = document.getElementById('about_me_button')
const about_me_button_homepage = document.getElementById('about_me_button_homepage')
const about_me_diagram = document.querySelector('.about_me_diagram');

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
            animationText.classList?.add('text_visible')
            animationPicture.src = "multimedia/visual_studio_build.PNG";
            globalSettings.classList?.remove('waiting_cursor')
        }
    }, 2000);
}

about_me_button_menu.addEventListener('click', function(){
    setTimeout(function(){
        about_me_article.classList?.add('slide_up_article_animation');
        about_me_article_text.classList?.add('slide_up_text_animation');
    }, 700);
    setTimeout(function(){
        about_me_diagram.classList?.add('about_me_diagram_resized')
    }, 2700);
});

about_me_button_homepage.addEventListener('click', function(){
    setTimeout(function(){
        about_me_article.classList?.add('slide_up_article_animation');
        about_me_article_text.classList?.add('slide_up_text_animation');
    }, 700);
    setTimeout(function(){
        about_me_diagram.classList?.add('about_me_diagram_resized')
    }, 2700);
});