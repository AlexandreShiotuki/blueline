const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselIndicators = carousel.querySelector('.carousel-indicators');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');

let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const indicators = carouselIndicators.querySelectorAll('.carousel-indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function goToNextImage() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function goToPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
}

function createIndicators() {
  carouselItems.forEach(() => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    carouselIndicators.appendChild(indicator);
  });
}

prevButton.addEventListener('click', goToPrevImage);
nextButton.addEventListener('click', goToNextImage);

createIndicators();
updateCarousel();
