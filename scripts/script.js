// Main script functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize search functionality
  initSearch();
  
  // Add smooth scrolling to all links
  addSmoothScrolling();
  
  // Add responsive navigation for mobile
  setupResponsiveNav();
});

// Initialize search functionality
function initSearch() {
  const searchInput = document.querySelector('.searchBar input');
  const searchButton = document.querySelector('.searchBar button');
  
  // Search functionality
  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') return;
    
    // Filter movies based on search term
    const filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchTerm) || 
             movie.genres.some(genre => genre.toLowerCase().includes(searchTerm));
    });
    
    // Clear existing movies
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    
    // Display search results
    if (filteredMovies.length > 0) {
      filteredMovies.forEach(movie => {
        const movieCard = window.createMovieCard ? window.createMovieCard(movie) : createFallbackMovieCard(movie);
        movieList.appendChild(movieCard);
      });
    } else {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = 'Нічого не знайдено';
      movieList.appendChild(noResults);
    }
    
    // Update section heading
    document.querySelector('.movie h2').textContent = `Фільми (${filteredMovies.length})`;
  }
  
  // Fallback function if movie.js isn't loaded correctly
  function createFallbackMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.imageUrl}" alt="${movie.title}">
        <div class="movie-overlay">
          <button class="watch-button">Дивитися</button>
        </div>
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-details">
          <span class="movie-year">${movie.year}</span>
          <div class="movie-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${movie.rating.toFixed(1)}</span>
          </div>
        </div>
        <div class="movie-genres">
          ${movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
        </div>
      </div>
    `;
    return card;
  }
  
  // Add event listeners for search
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

// Add smooth scrolling to all links
function addSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Setup responsive navigation for mobile
function setupResponsiveNav() {
  // To be implemented when needed
  // This would include a hamburger menu for mobile screens
}