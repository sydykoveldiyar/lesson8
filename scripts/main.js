let navWrapper = document.querySelector('.nav-wrapper'),
    navToogler = document.querySelector('.nav-toggler')

navToogler.addEventListener('click', function (event) {
    navWrapper.classList.toggle('active')
})