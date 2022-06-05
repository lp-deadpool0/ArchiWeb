let openMenuBtn = document.querySelector(".header__btn")
let closeMenu = document.querySelector(".site-nav__close")
let siteNavMenu = document.querySelector(".site-nav-menu")

openMenuBtn.addEventListener("click", (e)=>{
    siteNavMenu.classList.add("site-nav_active")
    setTimeout(()=>{
        siteNavMenu.style.top = "0px"
    }, 500)
})
closeMenu.addEventListener("click", (e)=>{
    siteNavMenu.classList.remove("site-nav_active")

})