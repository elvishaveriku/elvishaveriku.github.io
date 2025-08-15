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


// ===== Badge Carousel =====
const badgeTrack = document.querySelector('.badge-carousel .badge-container');
const badgePrev = document.querySelector('.badge-prev');
const badgeNext = document.querySelector('.badge-next');
const badgeItems = Array.from(badgeTrack.children);

let badgeIndex = 0;
let badgesPerView = window.innerWidth <= 600 ? 2 : 4;

function updateBadgeCarousel() {
    const badgeWidth = badgeItems[0].getBoundingClientRect().width + 20; // includes gap
    badgeTrack.style.transform = `translateX(-${badgeIndex * badgeWidth}px)`;
}

badgeNext.addEventListener('click', () => {
    if (badgeIndex < badgeItems.length - badgesPerView) {
        badgeIndex++;
        updateBadgeCarousel();
    }
});

badgePrev.addEventListener('click', () => {
    if (badgeIndex > 0) {
        badgeIndex--;
        updateBadgeCarousel();
    }
});

window.addEventListener('resize', () => {
    badgesPerView = window.innerWidth <= 600 ? 2 : 4;
    badgeIndex = 0;
    updateBadgeCarousel();
});
