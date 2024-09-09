const header = document.querySelector("header");

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");

let navLinks = document.querySelector(".navlinks");



menu.addEventListener('click', () => {
    navLinks.classList.add('open');
})

let closeIcon = document.querySelector('.close')

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('open')
})

window.onscroll = () => {
    
    navLinks.classList.remove('open');
}

