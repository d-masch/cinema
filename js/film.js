class Film{
constructor(filmData){
     this._data = filmData;
     this.time = `${getTime(7, 15)}:${getTime(0, 59)}`;
    }
    isNotForAdult( ){
        return this._data.rate !== "R" && this._data.rate !== "NC-17";
    }
    getTitle( ){
        return this._data.title || this._data.name;
    }
    getTime( ){
        return this.time;
    }
    getId(){
        return this._data.id || `${this._data.name.replaceAll(" ", "-")}-${this._data.time}`;
    }
    getGeneres(){
        return this._data.genres.join(", ");
    }
    renderFilmTableItem(){
        return `
        <tr>
              <td> 
                <label class="checkbox" for = "${this.getId()}">
                     <input type = "checkbox"
                       class="table-checkbox"
                       id = "${this.getId()}"
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
              <td class="table-time">${this.getTime()}</td>
              <td>${this.getTitle()}</td>
              <td>${this.getGeneres()}</td>
        </tr> `;
    }
}
