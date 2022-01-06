const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-button');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Toggle theme switcher
const header = document.querySelector('.header');
const btn = document.querySelector('.slider');
const body = document.querySelector('body');
const projectsSec = document.querySelector('.projects-section');
const projects = document.querySelectorAll('.project');
const buttons = document.querySelectorAll('.button');
const aboutSec = document.querySelector('.about-section');
const headings = document.querySelectorAll('.em1');
const contactSec = document.querySelector('.contact-section');
const fas = document.querySelectorAll('.fab');
const fai = document.querySelector('.fas');
const smalls = document.querySelectorAll('small');
const checkbox = document.querySelector('input');
const femlink = document.querySelector('.fem-link');

btn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    projectsSec.classList.toggle('dark-theme');

    for (let project of projects) {
        project.classList.toggle('dark-theme');
    }
    for (let button of buttons) {
        button.classList.toggle('dark-theme');
    }
    for (let heading of headings) {
        heading.classList.toggle('dark-theme');
    }
    for (let fa of fas) {
        fa.classList.toggle('dark-theme');
    }
    for (let small of smalls) {
        small.classList.toggle('dark-theme');
    }

    fai.classList.toggle('dark-theme');
    aboutSec.classList.toggle('dark-theme');
    contactSec.classList.toggle('dark-theme');
    femlink.classList.toggle('dark-theme');
    // h3dark.classList.toggle('dark-theme');
})

window.onload = () => {
    checkbox.checked = false;
}