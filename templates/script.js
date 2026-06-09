const movieContainer = document.getElementById('movie-container');

function searchMovies() {
  const searchTerm = document.getElementById('query').value;

  if (searchTerm === '') {
    movieContainer.innerHTML = '<p>Please type something first!</p>';
    return;
  }

  fetchMovies(searchTerm);
}

const fetchMovies = async (searchTerm) => {
  try {
    movieContainer.innerHTML = '<p>Loading...</p>';

    const response = await fetch(`/api/search?q=${searchTerm}`);
    const data = await response.json();

    movieContainer.innerHTML = '';

    if (data.Response === "True") {
      data.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                    <div class="info">
                        <h2>${movie.title}</h2>
                        <p>${movie.release_date?.split('-')[0]}</p>
                    </div>
                `;
        movieContainer.appendChild(movieDiv);
      });
    } else {
      movieContainer.innerHTML = `<p>No movies found for "${searchTerm}"</p>`;
    }
  } catch (error) {
    console.error('Error fetching movie data:', error);
    movieContainer.innerHTML = `<p>There was an error fetching the movie data.</p>`;
  }
};

fetchMovies('action');