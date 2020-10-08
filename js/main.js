'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let lastFilm = prompt('Один из последних посмотренных фильмов');
let review = prompt('На сколько оцените его?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[lastFilm] = review;

console.log(personalMovieDB);