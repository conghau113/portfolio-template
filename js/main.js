// menu
const menu = document.querySelector('.navbar__links')
const menuButton = document.querySelector('.navbar__icons')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__open')
    menuButton.classList.toggle('open')
    overlay.classList.toggle('show')
})

const overlay = document.querySelector('#overlay')

overlay.addEventListener('click', () =>{
    menu.classList.toggle('navbar__open')
    menuButton.classList.toggle('open')
    overlay.classList.toggle('show')
})