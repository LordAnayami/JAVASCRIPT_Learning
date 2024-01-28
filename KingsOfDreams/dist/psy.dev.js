"use strict";

var tableParents1 = document.getElementsByClassName("table1");
var tableParents2 = document.getElementsByClassName("table2");
var psy1 = {
  s1: {
    name: "MIGNON z Królestwa Motyli",
    img: "./img/psy/mignon.jpg",
    birth: "2012-11-14",
    title: "PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
  },
  s2: {
    name: "Lord Lary Kings Of Dreams",
    img: "./img/psy/lary.jpg",
    birth: "2020-09-13",
    title: "PLCH  PLJCH  MOLCH  SRBCH "
  },
  s3: {
    name: "Arpad Formidable De Maison Des Lys",
    img: "./img/Sissi.jpg",
    birth: "2021-02-12",
    title: "PLCH  PLJCH  MOLCH"
  },
  s4: {
    name: "Merci La Azzaro Kings Of Dreams",
    img: "./img/Sissi.jpg",
    birth: "2022-02-27",
    title: "PLCH  PLJCH MŁODZIEŻOWY INTCH(FCI)"
  }
};
var psy2 = {
  s1: {
    name: "SUNSET DREAM LAST MAN STANDING",
    img: "./img/Sissi.jpg",
    birth: "2022-04-02",
    title: ""
  }
};

var fillTable = function fillTable(object) {
  var string = '<tr><td>Imię</td><td>Zdjęcie</td><td>Data Urodzenia</td><td>Tytuły</td></tr>';

  for (var pies in object) {
    string += "\n            <tr>\n                <td>".concat(object[pies].name, "</td>\n                <td><img id=\"zdjecia\" src=\"").concat(object[pies].img, "\" alt=\"").concat(object[pies].name, "\" ></td>\n                <td>").concat(object[pies].birth, "</td>\n                <td>").concat(object[pies].title, "</td>\n            </tr>\n        ");
  }

  return string;
};

document.addEventListener('DOMContentLoaded', function () {
  var string1 = fillTable(psy1);
  tableParents1[0].innerHTML = string1;
  var string2 = fillTable(psy2);
  tableParents2[0].innerHTML = string2;
});