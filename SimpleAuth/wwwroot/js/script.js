const api_key = "66c7da9056c954f77c125e81ac34ad7a";
const fetchPopularString = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
const fetchNewString = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
const fetchUpcomingString = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

function fetchApi(fetchString) {
    fetch(fetchString)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(function (obj) {

                const name = obj.original_title;
                const poster = obj.poster_path;
                const bg = obj.backdrop_path;
                const id = obj.id;
                const year = obj.release_date;
                const runtime = obj.runtime;
                const desc = obj.overview;
                const movie = `<div class="movie_card">
                                <div class="info_section">
                                    <div class="movie_header">
                                        <img class="locandina" src="https://image.tmdb.org/t/p/original/${poster}"/>
                                        <h1>${name}</h1>
                                        <h4>${year}</h4>
                                        <span class="minutes">${runtime}</span>
                                        <p class="type"></p>
                                    </div>
                                    <div class="movie_desc">
                                        <p class="text">
                                            ${desc}
                                        </p>
                                    </div>
                                    <div class="movie_social">
                                        <ul>
                                            <li><i class="material-icons">share</i></li>
                                            <li><button class="check" id=${id}></button></li>
                                            <li><i class="material-icons">chat_bubble</i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blur_back bright_back" > <img class="locandina" src="https://image.tmdb.org/t/p/original/${bg}"/></div>
                            </div>
                            `
                document.querySelector('.movies').innerHTML += movie;
            });
        })

    var delayInMilliseconds = 1000; //1 second
    let submit = document.getElementById("submit");
    setTimeout(function () {
        let btns = document.querySelectorAll(".check");
        btns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                document.getElementById("movie_id").value = this.id;
                submit.click();
            })
        })
    }, delayInMilliseconds);
}


    fetchApi(fetchPopularString);

document.querySelector(".popular").addEventListener("click", function () {
        document.querySelector('.movies').innerHTML = '';
        fetchApi(fetchPopularString);
    });

    document.querySelector(".new").addEventListener("click", function () {
        document.querySelector(".movies").innerHTML = '';
        fetchApi(fetchNewString);
    });

    document.querySelector(".upcoming").addEventListener("click", function () {
        document.querySelector(".movies").innerHTML = '';
        fetchApi(fetchUpcomingString);
    });

document.querySelector(".searchBtn").addEventListener("click", function () {
    document.querySelector(".movies").innerHTML = '';
    let searchText = document.querySelector(".searchInput").value;
    fetchApi(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchText}&page=1&include_adult=false`);
})

