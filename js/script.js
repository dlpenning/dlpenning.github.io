const navbar = document.getElementById('navbar')
const hamburger = navbar.querySelector('.navbar-hamburger')
const blocker = navbar.querySelector('.navbar-nav-blocker')

hamburger.addEventListener('click', e => {

    if (navbar.classList.contains('active'))
        navbar.classList.remove('active')
    else
        navbar.classList.add('active')

})

blocker.addEventListener('click', e => {

    if (navbar.classList.contains('active'))
        navbar.classList.remove('active')
    else
        navbar.classList.add('active')

})

const hero = document.getElementById('hero_main')

let counter = 0

const interval = setInterval(() => {
    counter++
    if (counter > 2)
        counter = 0
    hero.style.backgroundImage = `url('../../img/bghero${counter}.jpg')`;
}, 10000)

