document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "f218e5a7ea2c99641927482e1ec1dfd1"; // Замените на ваш API-ключ
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMAGE_URL = "https://image.tmdb.org/t/p/w300";
  
    async function fetchMovies() {
      try {
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU`);
        const data = await res.json();
        showMovies(data.results);
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    }
  
    function showMovies(movies) {
      const movieList = document.getElementById('movie-list');
      movieList.innerHTML = "";
  
      movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie';
        div.innerHTML = `
          <img src="${IMAGE_URL + movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <button onclick="alert('Смотреть: ${movie.title}')">Смотреть</button>
        `;
        movieList.appendChild(div);
      });
    }
  
    fetchMovies();
  });
  