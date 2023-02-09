const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
});

// close the showing menu on the mobile screen 
const navLink = document.querySelectorAll('.nav--link');

const linkAction = () => {
    const navMenu = document.querySelector('.nav-links');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



