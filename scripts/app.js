const $ = document

const navBtn = $.querySelector('.nav__btn');
const navMenu = $.querySelector('.nav-menu');
let isOpen = false

navBtn.addEventListener('click', () => {
    if (isOpen) {
        navBtn.classList.remove('nav__btn--open')
        navMenu.style.left = '-25rem'
        isOpen = false
    } else {
        navBtn.classList.add('nav__btn--open')
        navMenu.style.left = '0'
        isOpen = true
    }
})