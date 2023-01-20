// TMDB

const API_KEY = 'api_key=1b055639c22c38309a9722888cb3404e';
const BASE_URL =  'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search')

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
       console.log(data.results);
        showMovies(data.results);
    })

}

function showMovies(data) {
    main.innerText = '';

    data.forEach(movie => {
        const {title, poster_path, overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
        <div class="movie-list-item">
        <img class="movie-list-item-img" src="${IMG_URL+poster_path}">
        <span class="movie-list-item-title">${title}</span>
        <p class="movie-list-item-desc">
            ${overview}
        </p>
        <button class="movie-list-item-button">Watch</button>
    </div>

        `

        main.appendChild(movieE1);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searhTerm = search.value;

    if(searhTerm) {
        getMovies(searchURL+'&query='+searhTerm)
    }else{
        getMovies(API_URL);
    }


} )

