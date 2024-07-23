// Select elements from the DOM
const moviePoster = document.getElementById('movie-poster');
const movieTitle = document.getElementById('movie-title');
const movieRuntime = document.getElementById('movie-runtime');
const movieShowtime = document.getElementById('movie-showtime');
const movieTickets = document.getElementById('movie-tickets');
const buyTicketBtn = document.getElementById('buy-ticket-btn');
const filmsList = document.getElementById('films');
const clearListBtn = document.getElementById('clearListBtn');

// Fetch and display the first movie's details
fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(data => displayMovieDetails(data));

// Fetch and display the list of all movies
fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => displayMoviesList(data));

// Display the details of a movie
function displayMovieDetails(movie) {
    moviePoster.src = movie.poster;
    movieTitle.textContent = movie.title;
    movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
    movieShowtime.textContent = `Showtime: ${movie.showtime}`;
    updateAvailableTickets(movie);
    buyTicketBtn.onclick = () => buyTicket(movie);
}

// Display the list of the movies
function displayMoviesList(movies) {
    filmsList.innerHTML = '';
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.className = movie.tickets_sold >= movie.capacity ? 'sold-out film item' : 'film item';
        li.onclick = () => fetch(`http://localhost:3000/films/${movie.id}`)
            .then(response => response.json())
            .then(data => displayMovieDetails(data));
        filmsList.appendChild(li);
    });
}