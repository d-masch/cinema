"use strict";

var blockFilmsWrapper = document.getElementById("block-films-wrapper");
blockFilmsWrapper.innerHTML = "";
fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1", {
  headers: {
    accept: "application/json",
    "X-API-KEY": "cbf2aa23-5382-43f6-8a76-71ce0838aca5",
    "Content-Type": "application/json"
  }
}).then(function (answer) {
  return answer.json();
}).then(function (data) {
  console.log(data.films);
  data.films.forEach(function (film) {
    var filmDescId = "block-films-des-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n            <div class=\"movies-images_movie\">\n                <div>\n                    <img\n                        class=\"movies-images_image\"\n                        src=\"".concat(film.posterUrlPreview, "\"\n                        alt=\"movie 1\"\n                    />\n                </div>\n                <div class=\"movies-images_shadow\"></div>\n                <div class=\"movies-images_descr\">\n                    <div class=\"movies-images_descrtext1\">").concat(film.nameRu, "</div>\n                    <div class=\"movies-images_descrtext2\" id=\"").concat(filmDescId, "\"></div>\n                </div>\n            </div>");
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(film.filmId), {
      headers: {
        accept: "application/json",
        "X-API-KEY": "cbf2aa23-5382-43f6-8a76-71ce0838aca5",
        "Content-Type": "application/json"
      }
    }).then(function (answer) {
      return answer.json();
    }).then(function (filmData) {
      var descrElement = document.getElementById(filmDescId);
      descrElement.innerText = filmData.description;

      if (!filmData.description) {
        blockFilmsWrapper.removeChild(descrElement.parentNode.parentNode);
      }
    });
  });
});