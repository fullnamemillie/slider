const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

sliderItems.forEach(function(slide, index) {
    console.log(slide);

    if (index !== 0) {
        slide.classList.add('hidden');
    }

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function() {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    })
});

btnNext.onclick = function() {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function() {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}