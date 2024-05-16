
let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


// java scroll 

document.addEventListener("DOMContentLoaded", function () {

    console.log("e")

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let elements = document.querySelectorAll('.slide')
    // console.log(elements)
    let x = 0;
    let istyping = false;

    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);
        console.log(height)

        elements.forEach((slide) => {
            const elementstop = slide.getBoundingClientRect().top;
            console.log(elementstop)
            if (elementstop < height) {
                slide.classList.add('show');
                slide.classList.remove('slide');

            } else {
                slide.classList.remove('show');

                slide.classList.add('slide');

            }
        });

    }
    window.addEventListener('scroll', scrollfunc)
    window.addEventListener('touchmove', scrollfunc)




})

