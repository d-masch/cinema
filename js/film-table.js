const films = [
  {
    id: "10",
    time: "10:00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
  },
  {
    time: "12:00",
    rate: "R",
    name: "Собачья жизнь 2",
    genres: ["фентези", "драмма", "комедия"],
  },
  {
    time: "14:00",
    rate: "G",
    name: "История игрушек 4",
    genres: ["Мультфильмы", "фентези", "комедия"],
  },
  {
    time: "16:00",
    rate: "NC-17",
    name: "Люди в черном: Интернешнл",
    genres: ["Фантастика", "боевик", "комедия"],
  },
  {
    time: "18.00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
  },
  {
    time: "20:00",
    rate: "R",
    name: "Собачья жизнь 2",
    genres: ["фентези", "драмма", "комедия"],
  },
  {
    time: "22:00",
    rate: "G",
    name: "История игрушек 4",
    genres: ["Мультфильмы", "фентези", "комедия"],
  },
  {
    time: "23:00",
    name: "Люди в черном: Интернешнл",
    genres: ["Фантастика", "боевик", "комедия"],
  },
];
let tbody = document.getElementById("table-body");
tbody.innerHTML = "";
const filmHelper = {
  getId() {
    return this.id || `${this.name.replaceAll(" ", "-")}-${this.time}`;
  },
  getTitle() {
    return this.name;
  },
  getTime() {
    return this.time;
  },
  getGeneres() {
    return this.genres.join(", ");
  },
};
function renderFilmTableItem(film) {
  return `
  <tr>
        <td> 
          <label class="checkbox" for = "${filmHelper.getId.apply(film)}">
               <input type = "checkbox"
                 class="table-checkbox"
                 id = "${filmHelper.getId.apply(film)}"
                 />
                 <span class="checkbox-svg">
                    <svg  
                    width=".55rem" 
                     height=".45rem" 
                     viewBox="0 0 11 9" 
                     xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                         clip-rule="evenodd" 
                         d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 
                         0.298203L4.60581 6.79378Z"/>
                     </svg>
                  </span>
           </label>
        </td>
        <td>${filmHelper.getTime.apply(film)}</td>
        <td><a href="https://www.kinopoisk.ru/film/838/" target="_blank">${filmHelper.getTitle.apply(
          film
        )}</a></td>
        <td>${filmHelper.getGeneres.apply(film)}</td>
  </tr> `;
}
for (const film of films) {
  if (!(film.rate === "R" || film.rate === "NC-17")) {
    tbody.innerHTML += renderFilmTableItem(film);
  }
}
