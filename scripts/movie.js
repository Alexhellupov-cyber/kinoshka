// Movie grid functionality
document.addEventListener('DOMContentLoaded', function() {
  const movieList = document.getElementById('movie-list');

  // Initialize the movie grid
  function initMovieGrid() {
    // Create movie cards
    movies.forEach(movie => {
      const movieCard = createMovieCard(movie);
      movieList.appendChild(movieCard);
    });
  }

  // Create a movie card element
  function createMovieCard(movie) {
    // Create movie card container
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.dataset.id = movie.id;
    
    // Create movie poster
    const posterDiv = document.createElement('div');
    posterDiv.className = 'movie-poster';
    
    const posterImg = document.createElement('img');
    posterImg.src = movie.imageUrl;
    posterImg.alt = movie.title;
    
    const overlayDiv = document.createElement('div');
    overlayDiv.className = 'movie-overlay';
    
    const watchButton = document.createElement('button');
    watchButton.className = 'watch-button';
    watchButton.textContent = 'Дивитися';
    watchButton.addEventListener('click', () => openMovieDetails(movie.id));
    
    overlayDiv.appendChild(watchButton);
    posterDiv.appendChild(posterImg);
    posterDiv.appendChild(overlayDiv);
    
    // Create movie info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'movie-info';
    
    const title = document.createElement('h3');
    title.textContent = movie.title;
    
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'movie-details';
    
    const yearSpan = document.createElement('span');
    yearSpan.className = 'movie-year';
    yearSpan.textContent = movie.year;
    
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'movie-rating';
    
    // Star icon for rating
    ratingDiv.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>${movie.rating.toFixed(1)}</span>
    `;
    
    detailsDiv.appendChild(yearSpan);
    detailsDiv.appendChild(ratingDiv);
    
    // Create genres tags
    const genresDiv = document.createElement('div');
    genresDiv.className = 'movie-genres';
    
    movie.genres.forEach(genre => {
      const genreTag = document.createElement('span');
      genreTag.className = 'genre-tag';
      genreTag.textContent = genre;
      genresDiv.appendChild(genreTag);
    });
    
    // Assemble all parts
    infoDiv.appendChild(title);
    infoDiv.appendChild(detailsDiv);
    infoDiv.appendChild(genresDiv);
    
    movieCard.appendChild(posterDiv);
    movieCard.appendChild(infoDiv);
    
    return movieCard;
  }

  // Function to open movie details (to be implemented in watch.js)
  function openMovieDetails(movieId) {
    console.log(`Opening movie with ID: ${movieId}`);
    // This function will be filled in watch.js
  }

  // Initialize the movie grid
  initMovieGrid();

  // Export the openMovieDetails function for use in other scripts
  window.openMovieDetails = openMovieDetails;
});