'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let q = prompt("Один из последних посмотренных фильмов", "");
      let a = prompt("На сколько оцените его?", "");
      if (q != "" && a != "" && q != null && a != null && q.length < 50) {
        personalMovieDB.movies[q] = a;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("error");
    }
}

function showMyDB() {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres () {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');;
    }
}
writeYourGenres()