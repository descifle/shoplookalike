const modContainer = document.querySelector('.nav_modal_container')
const mobiNav = document.querySelector('.mobile_nav')
const blockView = document.querySelector('.overlay')
const closeButton = document.querySelector('.close-btn')
const body = document.querySelector('body')

modContainer.addEventListener('click' , () => {
    blockView.classList.remove('mobile_cover')
    mobiNav.classList.add('interesting')
    // body.classList.add('stopscroll')
})

closeButton.addEventListener('click', () => {
    mobiNav.classList.toggle('interesting')
    blockView.classList.add('mobile_cover')
})