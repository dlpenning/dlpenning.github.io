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