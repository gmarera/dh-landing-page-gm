const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');   
    navList.classList.toggle('open');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'}) 
sr.reveal('.hero-img', {delay: 450, origin: 'left'}) 
sr.reveal('.icons', {delay: 300, origin: 'bottom'}) 
sr.reveal('.scroll-down', {delay: 450, origin: 'right'}) 