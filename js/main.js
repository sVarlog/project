'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++){
    let q = prompt("Один из последних посмотренных фильмов", "");
    let a = prompt("На сколько оцените его?", "");
    if(q != '' && a != '' && q != null && a != null && q.length < 50){
        personalMovieDB.movies[q] = a;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель')
} else if(personalMovieDB.count >= 30){
    alert('Вы киноман');
} else{
    alert('error');
}