const modContainer = document.querySelector('.nav_modal_container')
const mobiNav = document.querySelector('.mobile_nav')
const blockView = document.querySelector('.overlay')
const body = document.querySelector('body')

modContainer.addEventListener('click' , (e) => {
    blockView.style.visibility = "visible"
    mobiNav.classList.add('interesting')
    // body.classList.add('stopscroll')
})