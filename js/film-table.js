const films = [
  {
    time: "10.00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
  },
  {
    time: "12.00",
    name: "Собачья жизнь 2",
    genres: ["фентези", "драмма", "комедия"],
  },
  {
    time: "14.00",
    name: "История игрушек 4",
    genres: ["Мультфильмы", "фентези", "комедия"],
  },
  {
    time: "16.00",
    name: "Люди в черном: Интернешнл",
    genres: ["Фантастика", "боевик", "комедия"],
  },
  {
    time: "18.00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
  },
  {
    time: "20.00",
    name: "Собачья жизнь 2",
    genres: ["фентези", "драмма", "комедия"],
  },
  {
    time: "22.00",
    name: "История игрушек 4",
    genres: ["Мультфильмы", "фентези", "комедия"],
  },
  {
    time: "23.00",
    name: "Люди в черном: Интернешнл",
    genres: ["Фантастика", "боевик", "комедия"],
  },
];
let tbody = document.getElementById("table-body");
tbody.innerHTML = "";
for (const film of films) {
  tbody.innerHTML += `
<tr>
      <td> 
          <div class="table-body-td">
               <img src="./images/Stroke.png" alt="галка"></img>
          </div>
      </td>
      <td>${film.time}</td>
      <td><a href="https://www.kinopoisk.ru/film/838/" target="_blank">${
        film.name
      }</a></td>
      <td>${film.genres.join(", ")}</td>
</tr> `;
}
