'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms;){
    let q = prompt("Один из последних посмотренных фильмов", "");
    let a = prompt("На сколько оцените его?", "");
    if(q != '' && q != null && q.length < 50){
        if(a != '' && a != null && a.length < 50){
            i++;
        }
    }
    personalMovieDB.movies[q] = a;
}
if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель')
} else if(personalMovieDB.count > 30){
    alert('Вы киноман');
} else{
    alert('error');
}