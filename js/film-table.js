const films = [
  {time: "10.00",
   name: "Человек-паук",
   genres: [ "Фантастика", "боевик", "приключения" ],
  },   
  {time: "12.00",
   name: "Собачья жизнь 2",
   genres: [ "фентези", "драмма", "комедия" ],
  },
  {time: "14.00",
   name: "История игрушек 4",
   genres: [ "Мультфильмы", "фентези", "комедия" ],
  },
  {time: "16.00",
   name: "Люди в черном: Интернешнл",
   genres: [ "Фантастика", "боевик", "комедия" ],
  }, 
];
let tbody = document.getElementById('table-body');
console.log(tbody.innerHTML);

tbody.innerHTML = '
<tr>
      <td> 
          <div style="margin-left:25px;">
               <img src="./images/Stroke.png" alt="галка"></img>
          </div>
      </td>
      <td> 10.00</td>
      <td><a href="https://www.kinopoisk.ru/film/838/" target="_blank"> Человек паук</a></td>
      <td>Фантастика, боевик, приключения</td>
</tr> '
;



