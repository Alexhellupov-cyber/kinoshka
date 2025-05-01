// New Movies Data
const newMovies = [
    {
      id: 1,
      title: "Дюна: Частина друга",
      posterUrl: "https://images.pexels.com/photos/3876337/pexels-photo-3876337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 8.7
    },
    {
      id: 2,
      title: "Погані хлопці: Знову разом",
      posterUrl: "https://images.pexels.com/photos/7991382/pexels-photo-7991382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 7.9
    },
    {
      id: 3,
      title: "Ведмедик Паддінгтон у Перу",
      posterUrl: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 8.2
    },
    {
      id: 4,
      title: "Сімейка Аддамсів 2",
      posterUrl: "https://images.pexels.com/photos/7991479/pexels-photo-7991479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 7.4
    },
    {
      id: 5,
      title: "Монстриця",
      posterUrl: "https://images.pexels.com/photos/7991576/pexels-photo-7991576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 7.8
    },
    {
      id: 6,
      title: "Ґодзілла і Конг: Нова імперія",
      posterUrl: "https://images.pexels.com/photos/9706493/pexels-photo-9706493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 8.1
    },
    {
      id: 7,
      title: "Бетмен: Кошмар Аркхема",
      posterUrl: "https://images.pexels.com/photos/13964309/pexels-photo-13964309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 8.4
    },
    {
      id: 8,
      title: "Заклинання",
      posterUrl: "https://images.pexels.com/photos/7208709/pexels-photo-7208709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 7.3
    },
    {
      id: 9,
      title: "Інферно",
      posterUrl: "https://images.pexels.com/photos/6705843/pexels-photo-6705843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 7.9
    },
    {
      id: 10,
      title: "Людина-павук: За межами всесвіту",
      posterUrl: "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      year: 2024,
      rating: 9.0
    }
  ];
  
  // Initialize carousel when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('news-carousel');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    
    // Calculate the width of a single movie card plus gap
    let cardWidth = 0;
    let visibleCards = 0;
    
    // Populate carousel with movie cards
    function populateCarousel() {
      carousel.innerHTML = '';
      
      newMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
          <div class="movie-poster">
            <img src="${movie.posterUrl}" alt="${movie.title}">
          </div>
          <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
              <span class="movie-year">${movie.year}</span>
              <span class="movie-rating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                ${movie.rating}
              </span>
            </div>
          </div>
        `;
        
        // Add click event to movie card
        movieCard.addEventListener('click', () => {
          console.log(`Movie clicked: ${movie.title}`);
          // Add navigation to movie details page when needed
          // window.location.href = `movie-details.html?id=${movie.id}`;
        });
        
        carousel.appendChild(movieCard);
      });
    }
    
    // Calculate dimensions for scrolling
    function calculateDimensions() {
      if (carousel.children.length > 0) {
        const firstCard = carousel.children[0];
        const cardStyle = window.getComputedStyle(firstCard);
        const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
        
        cardWidth = firstCard.offsetWidth + cardMarginRight + 24; // Width + margin + gap (1.5rem = 24px)
        
        // Calculate number of visible cards
        const carouselWidth = carousel.offsetWidth;
        visibleCards = Math.floor(carouselWidth / cardWidth);
      }
    }
    
    // Scroll carousel
    function scrollCarousel(direction) {
      const scrollAmount = cardWidth * (visibleCards > 1 ? visibleCards - 1 : 1);
      
      if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
    
    // Add event listeners for arrow buttons
    leftArrow.addEventListener('click', () => scrollCarousel('left'));
    rightArrow.addEventListener('click', () => scrollCarousel('right'));
    
    // Initialize
    populateCarousel();
    
    // Calculate dimensions after images load
    window.addEventListener('load', calculateDimensions);
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateDimensions);
    
    // Add keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        scrollCarousel('left');
      } else if (e.key === 'ArrowRight') {
        scrollCarousel('right');
      }
    });
  });