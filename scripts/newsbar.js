// News carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('news-carousel');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let position = 0;
  let isAnimating = false;
  let autoSlideInterval;

  // Initialize the carousel
  function initCarousel() {
    // Create news items
    newsItems.forEach((item, index) => {
      const newsItem = document.createElement('div');
      newsItem.className = `news-item ${index === 0 ? 'active' : ''}`;
      newsItem.style.transform = `translateX(${(index - position) * 100}%)`;
      
      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.title;
      
      const overlay = document.createElement('div');
      overlay.className = 'news-overlay';
      
      const title = document.createElement('h3');
      title.textContent = item.title;
      
      const description = document.createElement('p');
      description.textContent = item.description;
      
      overlay.appendChild(title);
      overlay.appendChild(description);
      
      newsItem.appendChild(img);
      newsItem.appendChild(overlay);
      
      carousel.appendChild(newsItem);
    });
  }

  // Slide to the left
  function slideLeft() {
    if (isAnimating) return;
    isAnimating = true;
    position = position === 0 ? newsItems.length - 1 : position - 1;
    updateCarousel();
    setTimeout(() => isAnimating = false, 500);
  }

  // Slide to the right
  function slideRight() {
    if (isAnimating) return;
    isAnimating = true;
    position = position === newsItems.length - 1 ? 0 : position + 1;
    updateCarousel();
    setTimeout(() => isAnimating = false, 500);
  }

  // Update carousel based on current position
  function updateCarousel() {
    const items = document.querySelectorAll('.news-item');
    items.forEach((item, index) => {
      item.style.transform = `translateX(${(index - position) * 100}%)`;
      item.classList.toggle('active', index === position);
    });
  }

  // Start auto-sliding
  function startAutoSlide() {
    autoSlideInterval = setInterval(slideRight, 5000);
  }

  // Stop auto-sliding on user interaction
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Restart auto-sliding after user interaction
  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Initialize the carousel
  initCarousel();

  // Add click event listeners to arrows
  leftArrow.addEventListener('click', () => {
    slideLeft();
    restartAutoSlide();
  });

  rightArrow.addEventListener('click', () => {
    slideRight();
    restartAutoSlide();
  });

  // Pause auto-sliding when mouse is over the carousel
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Start auto-sliding
  startAutoSlide();
});