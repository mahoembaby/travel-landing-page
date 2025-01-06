const header  = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 60)
});


let menuIcon = document.querySelector('#menu-toggle'),
navbar = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
