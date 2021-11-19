// SCROLL REVEAL

// HOME
ScrollReveal().reveal('#navigation', { delay: 250 });
ScrollReveal().reveal('#home-showcase', { delay: 500, distance: '30%', duration: 2000 });
ScrollReveal().reveal('#about', { delay: 100, distance: '30%', duration: 1500 });
ScrollReveal().reveal('#contacts', { delay: 100, distance: '30%', duration: 1500 });
ScrollReveal().reveal('#footer', { delay: 100, distance: '30%', duration: 1500 });
ScrollReveal().reveal('.video-container', { delay: 100, distance: '30%', duration: 1500 });

// CATEGORIES
ScrollReveal().reveal('#category-header', { delay: 100, distance: '30%', duration: 1500 });
ScrollReveal().reveal('.showcase-image', { delay: 200, distance: '30%', duration: 1500 });
ScrollReveal().reveal('#bottom-nav', { delay: 200, distance: '30%', duration: 1500 });



// MENU
const navToggle = document.getElementById('nav-toggle');
const navBody = document.querySelector('.mobile-nav-body');

let showMenu = false;

navToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        navToggle.classList.add('close');
        navBody.classList.add('show');
        document.body.style.overflow = 'hidden';
        showMenu = true;
    } else {
        navToggle.classList.remove('close');
        navBody.classList.remove('show');
        document.body.style.overflow = 'visible';
        showMenu = false;
    }
}



// SCROLL
const scrollup = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
    let y = window.scrollY;

    if(y > 800) {
        scrollup.style.display ='block';
    } else {
        scrollup.style.display ='none';
    }
});

