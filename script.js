document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('input[name="carousel"]');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    leftArrow.addEventListener('click', () => {
        let currentIndex = getCurrentIndex();
        slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1].checked = true;
    });

    rightArrow.addEventListener('click', () => {
        let currentIndex = getCurrentIndex();
        slides[(currentIndex + 1) % slides.length].checked = true;
    });

    function getCurrentIndex() {
        return Array.from(slides).findIndex(slide => slide.checked);
    }
});
