AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})

AOS.init();

const tabs = document.querySelectorAll('[data-tab-target]')
const sections = document.querySelectorAll('.section')

tabs.forEach(tab =>
    tab.addEventListener('click', function() {
        const target = document.querySelector(tab.dataset.tabTarget)
        sections.forEach(function (section) {
            section.classList.add('inactive')
            section.classList.remove('active')
        })    
        tabs.forEach(function (tab) {
            tab.classList.remove('BG')
        })
        tab.classList.add('BG')
        target.classList.remove('inactive')
        target.classList.add('active')
        
    })
    

)