document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    const isMobileButton = e.target.matches("[data-mobile-button]")
    if(!isMobileButton && !isDropdownButton && (e.target.closest('[data-dropdown]') != null || e.target.closest('[data-mobile-menu]') != null)) return

    let currentDropdown
    let currentMobileMenu
    if(isDropdownButton) {
        console.log("TEST!")
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')  
    }
    if(isMobileButton) {
        currentMobileMenu = e.target.closest('[data-mobile-menu]')
        if(currentMobileMenu.classList.contains('active')) {
            currentMobileMenu.classList.remove('active')
        }
        else {
            currentMobileMenu.classList.toggle('active') 
        }
            
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })

})

