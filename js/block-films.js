const blockFilmsWrapper = document.getElementById("block-films-wrapper");
blockFilmsWrapper.innerHTML = "";

fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1",
    {
        headers: {
            accept: "application/json",
            "X-API-KEY": "cbf2aa23-5382-43f6-8a76-71ce0838aca5",
            "Content-Type": "application/json",
        },
    }
)
    .then((answer) => answer.json())
    .then(data => {
        console.log(data.films);

        data.films.forEach(film => {
            const filmDescId = `block-films-des-${film.filmId}`;
            blockFilmsWrapper.innerHTML += `
            <div class="movies-images_movie">
                <div>
                    <img
                        class="movies-images_image"
                        src="${film.posterUrlPreview}"
                        alt="movie 1"
                    />
                </div>
                <div class="movies-images_shadow"></div>
                <div class="movies-images_descr">
                    <div class="movies-images_descrtext1">${film.nameRu}</div>
                    <div class="movies-images_descrtext2" id="${filmDescId}"></div>
                </div>
            </div>`
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}`,{
                headers: {
                    accept: "application/json",
                    "X-API-KEY": "cbf2aa23-5382-43f6-8a76-71ce0838aca5",
                    "Content-Type": "application/json",
                },
            })
            .then((answer) => answer.json())
            .then(filmData => {
               const descrElement = document.getElementById(filmDescId);
               descrElement.innerText = filmData.description;
                if (!filmData.description) {
 blockFilmsWrapper.removeChild(descrElement.parentNode.parentNode);
                }
            })
        });
    });
