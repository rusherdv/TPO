const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.pagesRefContainer');
const menuIcon = document.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});