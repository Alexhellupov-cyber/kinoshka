document.addEventListener("DOMContentLoaded", async () => {
    const API_KEY = "f218e5a7ea2c99641927482e1ec1dfd1";
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
  
    if (!movieId) return;
  
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ru-RU`);
    const movie = await res.json();
  
    const container = document.getElementById("film-info");
    container.innerHTML = `
      <h1>${movie.title}</h1>
      <img src="${IMAGE_URL + movie.backdrop_path}" alt="${movie.title}" style="width:100%;max-width:800px">
      <p>${movie.overview}</p>
      <p>Рейтинг: ${movie.vote_average}</p>
      <!-- Тут можно вставить iframe плеера или ссылку на внешний сайт -->
    `;
  });
  