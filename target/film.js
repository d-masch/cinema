"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this._data = filmData;
    this.time = "".concat(getTime(7, 15), ":").concat(getTime(0, 59));
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return this._data.rate !== "R" && this._data.rate !== "NC-17";
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this._data.title || this._data.name;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._data.id || "".concat(this._data.name.replaceAll(" ", "-"), "-").concat(this._data.time);
    }
  }, {
    key: "getGeneres",
    value: function getGeneres() {
      return this._data.genres.join(", ");
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr>\n              <td> \n                <label class=\"checkbox\" for = \"".concat(this.getId(), "\">\n                     <input type = \"checkbox\"\n                       class=\"table-checkbox\"\n                       id = \"").concat(this.getId(), "\"\n                       />\n                       <span class=\"checkbox-svg\">\n                          <svg  \n                          width=\".55rem\" \n                           height=\".45rem\" \n                           viewBox=\"0 0 11 9\" \n                           xmlns=\"http://www.w3.org/2000/svg\">\n                              <path fill-rule=\"evenodd\"\n                               clip-rule=\"evenodd\" \n                               d=\"M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 \n                               0.298203L4.60581 6.79378Z\"/>\n                           </svg>\n                        </span>\n                 </label>\n              </td>\n              <td class=\"table-time\">").concat(this.getTime(), "</td>\n              <td>").concat(this.getTitle(), "</td>\n              <td>").concat(this.getGeneres(), "</td>\n        </tr> ");
    }
  }]);

  return Film;
}();