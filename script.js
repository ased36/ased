let current = 0;
const slides = document.querySelectorAll('.container');

function nextSlide() {
    slides[current].classList.remove('active');
    current++;
    slides[current].classList.add('active');
}
