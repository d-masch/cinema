const films = [
  {
    time: "10",
    rate: "G",
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
  // {
  //   time: "23:00",
  //   name: "Люди в черном: Интернешнл",
  //   genres: ["Фантастика", "боевик", "комедия"],
  // },
];
let tbody = document.getElementById("table-body");
tbody.innerHTML = "";

for (const film of films) {
  const filmItem = new Film(film);
  if (filmItem.isNotForAdult()) {
     tbody.innerHTML += filmItem.renderFilmTableItem(film);
  }
}
