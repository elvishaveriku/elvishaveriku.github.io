const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cards = Array.from(track.children);

let currentIndex = 0;
let cardsPerView = window.innerWidth <= 600 ? 1 : 2;

function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // margin included
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - cardsPerView) {
        currentIndex += cardsPerView;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= cardsPerView;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    cardsPerView = window.innerWidth <= 600 ? 1 : 2;
    currentIndex = 0;
    updateCarousel();
});
