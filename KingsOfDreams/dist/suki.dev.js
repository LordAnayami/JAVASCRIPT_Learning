"use strict";

var tableParents1 = document.getElementsByClassName("table1");
var tableParents2 = document.getElementsByClassName("table2");
var tableParents3 = document.getElementsByClassName("table3");
var suki1 = {
  s1: {
    name: "Falvara Sisi Milfra-Moravia",
    img: "./img/suki/sisi.jpg",
    birth: "2015-03-03",
    title: "PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
  },
  s2: {
    name: "CHARLOTTA Kings Of Dreams",
    img: "./img/suki/charlota.jpg",
    birth: "2018-05-28",
    title: "PLCH  PLJCH  BLRCH  BIHCH  INTCH(FCI)  MOLCH"
  },
  s3: {
    name: "Lady Daisy Kings of Dreams",
    img: "./img/suki/daisy.jpg",
    birth: "2020-09-13",
    title: "PLCH  PLJCH  MOLCH"
  },
  s4: {
    name: "Lady Liliana Kings Of Dreams",
    img: "./img/suki/lili.jpg",
    birth: "2020-09-13",
    title: "PLCH  PLJCH  SRBCH"
  },
  s5: {
    name: "Merci La Blanca Kings Of Dreams",
    img: "./img/suki/blanka.jpg",
    birth: "2022-02-27",
    title: ""
  },
  s6: {
    name: "Merci La Coco Chanel Kings Of Dreams",
    img: "./img/suki/koki.jpg",
    birth: "2022-02-27",
    title: "PLJCH  HSHCH"
  },
  s7: {
    name: "Black Nela Kings Of Dreams",
    img: "./img/suki/nela.jpg",
    birth: "2023-07-31",
    title: ""
  }
};
var suki2 = {
  s1: {
    name: "SUNSET DREAM KISS ME BLISS ME",
    img: "./img/suki/austr.jpg",
    birth: "2021-09-18",
    title: ""
  }
};
var suki3 = {
  s1: {
    name: "Maalum Uzuri Hypnosis Black Pearl",
    img: "./img/suki/perla.jpg",
    birth: "2018-02-05",
    title: ""
  }
};

var fillTable = function fillTable(object) {
  var string = '<tr><td>Imię</td><td>Zdjęcie</td><td>Data Urodzenia</td><td>Tytuły</td></tr>';

  for (var suka in object) {
    string += "\n            <tr>\n                <td>".concat(object[suka].name, "</td>\n                <td><img id=\"zdjecia\" src=\"").concat(object[suka].img, "\" alt=\"").concat(object[suka].name, "\" ></td>\n                <td>").concat(object[suka].birth, "</td>\n                <td>").concat(object[suka].title, "</td>\n            </tr>\n        ");
  }

  return string;
};

document.addEventListener('DOMContentLoaded', function () {
  var string1 = fillTable(suki1);
  tableParents1[0].innerHTML = string1;
  var string2 = fillTable(suki2);
  tableParents2[0].innerHTML = string2;
  var string3 = fillTable(suki3);
  tableParents3[0].innerHTML = string3;
});