// Watch functionality
document.addEventListener('DOMContentLoaded', function() {
  // Movie details functionality
  window.openMovieDetails = function(movieId) {
    // Find movie by id
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
      console.error('Movie not found');
      return;
    }
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'movie-modal-overlay';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'movie-modal-content';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close-button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
      document.body.removeChild(modalOverlay);
      document.body.style.overflow = 'auto';
    });
    
    // Create movie details HTML
    modalContent.innerHTML = `
      <div class="movie-modal-poster">
        <img src="${movie.imageUrl}" alt="${movie.title}">
      </div>
      <div class="movie-modal-info">
        <h2>${movie.title} (${movie.year})</h2>
        <div class="movie-modal-rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${movie.rating.toFixed(1)}/10</span>
        </div>
        <div class="movie-modal-genres">
          ${movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
        </div>
        <div class="movie-modal-description">
          <p>Це захоплюючий ${movie.genres.join(' ')} фільм, випущений у ${movie.year} році. Фільм отримав рейтинг ${movie.rating.toFixed(1)} від глядачів.</p>
        </div>
        <div class="movie-modal-buttons">
          <button class="watch-now-button">Дивитися зараз</button>
          <button class="add-to-favorites-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Додати до Обраного
          </button>
        </div>
      </div>
    `;
    
    // Add CSS to the document
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
      .movie-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
      }
      
      .movie-modal-content {
        background-color: #1a1a1a;
        border-radius: 8px;
        max-width: 800px;
        width: 100%;
        display: flex;
        overflow: hidden;
        position: relative;
        animation: modalFadeIn 0.3s ease;
      }
      
      @keyframes modalFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .modal-close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        color: #ffffff;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.3s ease;
      }
      
      .modal-close-button:hover {
        background-color: rgba(255, 76, 41, 0.8);
      }
      
      .movie-modal-poster {
        flex: 0 0 40%;
      }
      
      .movie-modal-poster img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .movie-modal-info {
        flex: 1;
        padding: 24px;
      }
      
      .movie-modal-info h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      
      .movie-modal-rating {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 16px;
      }
      
      .movie-modal-genres {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 20px;
      }
      
      .movie-modal-description {
        margin-bottom: 24px;
      }
      
      .movie-modal-description p {
        color: #d0d0d0;
        line-height: 1.5;
      }
      
      .movie-modal-buttons {
        display: flex;
        gap: 12px;
      }
      
      .watch-now-button {
        padding: 10px 20px;
        background-color: #ff4c29;
        color: white;
        border-radius: 4px;
        font-weight: 500;
        transition: background-color 0.3s ease;
      }
      
      .watch-now-button:hover {
        background-color: #e63e21;
      }
      
      .add-to-favorites-button {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 16px;
        background-color: transparent;
        border: 1px solid #555;
        color: #d0d0d0;
        border-radius: 4px;
        font-weight: 500;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }
      
      .add-to-favorites-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border-color: #777;
      }
      
      /* Responsive styles */
      @media (max-width: 768px) {
        .movie-modal-content {
          flex-direction: column;
        }
        
        .movie-modal-poster {
          height: 300px;
        }
        
        .movie-modal-buttons {
          flex-direction: column;
        }
      }
    `;
    
    // Append the close button to modal content
    modalContent.appendChild(closeButton);
    
    // Append modal content to overlay
    modalOverlay.appendChild(modalContent);
    
    // Append style and overlay to body
    document.head.appendChild(modalStyle);
    document.body.appendChild(modalOverlay);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for modal buttons
    const watchNowButton = modalOverlay.querySelector('.watch-now-button');
    watchNowButton.addEventListener('click', function() {
      alert(`Перегляд фільму "${movie.title}" почнеться незабаром.`);
    });
    
    const addToFavoritesButton = modalOverlay.querySelector('.add-to-favorites-button');
    addToFavoritesButton.addEventListener('click', function() {
      this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff4c29" stroke="#ff4c29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        Додано до Обраного
      `;
      this.style.borderColor = '#ff4c29';
      this.style.color = '#ff4c29';
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        document.body.removeChild(modalOverlay);
        document.body.style.overflow = 'auto';
      }
    });
  };
});