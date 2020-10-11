'use strict';
let numberOfFilms;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while(this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let q = prompt("Один из последних посмотренных фильмов", "");
            let a = prompt("На сколько оцените его?", "");
            if (q != "" && a != "" && q != null && a != null && q.length < 50) {
                this.movies[q] = a;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("error");
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++){
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if(this.genres[i] == '' || this.genres[i] == null || this.genres[i].length > 50){
                this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
                i--;
            }
        }
        this.genres.forEach((el, i) => {
            console.log(`Любимый жанр ${i} - это ${el}`);
        });
    },
    showMyDB: function() {
        if(this.privat == false){
            console.log(this);
        }
    },
    toggleVisibleNyDB: function() {
        if(this.privat == false){
            this.privat = true;
        } else {
            this.private = false;
        }
    }
};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleNyDB();
personalMovieDB.showMyDB();