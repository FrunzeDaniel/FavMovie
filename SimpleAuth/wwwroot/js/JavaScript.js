const api_key = "66c7da9056c954f77c125e81ac34ad7a";
function searchMovie() {
    let searchText = document.getElementById("search_text").value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchText}&page=1&include_adult=false`)
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
                const movie = ` < div class="movie_card" id = ${ id }>
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
                                            <li><button class="check"></button></li>
                                            <li><i class="material-icons">chat_bubble</i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blur_back bright_back" > <img class="locandina" src="https://image.tmdb.org/t/p/original/${bg}"/></div>
                            </div >
                            `
                // document.getElementById("movie_id").value = obj.id;


                document.querySelector('.movies').innerHTML += movie;
            });
        })
    var delayInMilliseconds = 1000; //1 second
    let submit = document.getElementById("submit");
    setTimeout(function () {
        let btns = document.querySelectorAll(".check");
        console.log(btns);
        btns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                document.getElementById("movie_id").value = event.target.parentElement.id;
                submit.click();
            })
        })
    }, delayInMilliseconds);

}

document.getElementById("search_submit").addEventListener("click", searchMovie);
