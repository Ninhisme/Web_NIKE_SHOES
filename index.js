let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')

slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
    slideControlItems[slideIndex].classList.add('active')
    slides[slideIndex].classList.add('active')
}, 500)



chooseProduct = (index) => {
    if (index === slideIndex) return

    slideIndex = index

    let currSlideControl = slideControl.querySelector('.slide-control-item.active')
    currSlideControl.classList.remove('active')

    let currSlide = slider.querySelector('.slide.active')
    currSlide.classList.remove('active')
    slider.style.marginTop = '-' + slideIndex + '00vh'

    // DOi 1s se thuc hien
    setTimeout(() => {
        // Dua slide ve vi tri ban dau tutu
        slider.style.marginTop = '-' + slideIndex + '00vh'
        // ADD active vao class co slide-control-item
        slideControlItems[slideIndex].classList.add('active')
        // ADD active vao class co slide
        slides[slideIndex].classList.add('active')
    },200)
}


Array.from(slideControlItems).forEach((el, index) => {
    el.onclick = function(){
        chooseProduct(index)
    }
})

