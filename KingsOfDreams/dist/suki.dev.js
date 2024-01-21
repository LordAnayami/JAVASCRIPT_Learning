"use strict";

var tableParents = document.getElementsByClassName("table");
var suki = {
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

  for (var suka in suki) {
    string += "\n            <tr>\n                <td>".concat(suki[suka].name, "</td>\n                <td><img src=\"").concat(suki[suka].img, "\" alt=\"").concat(suki[suka].name, "\" width=\"300\" height=\"200\"></td>\n                <td>").concat(suki[suka].hair, "</td>\n                <td>").concat(suki[suka].birth, "</td>\n                <td>").concat(suki[suka].sold, "</td>\n            </tr>\n        ");
  }

  return string;
};

document.addEventListener('DOMContentLoaded', function () {
  var string = fillTable();
  tableParents[0].innerHTML = string;
});