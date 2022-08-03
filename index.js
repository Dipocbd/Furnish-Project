const MobileIcon = document.querySelector(".hamburg");
const NavMenu = document.querySelector(".navMobile");
const Close = document.querySelector(".close");


// Display Mobile Menu
const mobileMenu = () => {
    NavMenu.style.display = 'block'
}

MobileIcon.addEventListener('click', mobileMenu)

Close.addEventListener('click', () => {
    NavMenu.style.display = 'none'
})
