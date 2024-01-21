"use strict";

var tableParents = document.getElementsByClassName("table");
var psy = {
  s1: {
    name: "Mignon",
    img: "./img/Mignon.jpg",
    hair: "white",
    birth: "XX.YY.ZZ",
    title: "XX,YY,ZZ"
  },
  s2: {
    name: "Sissi",
    img: "./img/Sissi.jpg",
    hair: "black",
    birth: "XX.YY.ZZ",
    title: "XX,YY,ZZ"
  }
};

var fillTable = function fillTable() {
  var string = '<tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Urodzenie</td><td>Tytuły</td></tr>';

  for (var pies in psy) {
    string += "\n            <tr>\n                <td>".concat(psy[pies].name, "</td>\n                <td><img src=\"").concat(psy[pies].img, "\" alt=\"").concat(psy[pies].name, "\" width=\"300\" height=\"200\"></td>\n                <td>").concat(psy[pies].hair, "</td>\n                <td>").concat(psy[pies].birth, "</td>\n                <td>").concat(psy[pies].sold, "</td>\n            </tr>\n        ");
  }

  return string;
};

document.addEventListener('DOMContentLoaded', function () {
  var string = fillTable();
  tableParents[0].innerHTML = string;
});