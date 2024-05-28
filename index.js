// Selecting elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Function to toggle the navbar
function toggleNavbar() {
    navbar.classList.toggle('active');
}

// Function to remove active class from nav links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Add click event listener to menuIcon
menuIcon.addEventListener('click', toggleNavbar);

// Close the navbar when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Highlight active section in the navbar when scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            removeActiveClass();
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};
