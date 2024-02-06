"use strict";

var table = document.getElementById("table");
var allMiots = {
  miot2023B: {
    name: "2023 B Chinese Crested",
    date: "2023-07-31",
    parents: {
      male: {
        name: "Arpad Formidable De Maison Des Lys",
        img: "./img/psy/pieta.jpg",
        birth: "2021-02-12",
        title: "PLCH  PLJCH  MOLCH"
      },
      female: {
        name: "Charlotta Kings Of Dreams",
        img: "./img/suki/charlota.jpg",
        birth: "2018-05-28",
        title: "PLCH  PLJCH  BLRCH  BIHCH  INTCH(FCI)  MOLCH"
      }
    },
    puppies: {
      puppy1: {
        name: "Black Aron Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/aron.jpg",
        sold: "Sprzedany Polska"
      },
      puppy2: {
        name: "Black Diego Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/diego.jpg",
        sold: "Wolny"
      },
      puppy3: {
        name: "Black Boss Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/boss.jpg",
        sold: "Wolny"
      },
      puppy4: {
        name: "Black Nela Kings of Dreams",
        img: "./img/suki/nela.jpg",
        sold: "Hodowla"
      },
      puppy5: {
        name: "Black Scarlet Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/scarlet.jpg",
        sold: "Wolna"
      },
      puppy6: {
        name: "Black Perla Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/perla.jpg",
        sold: "Wolna"
      },
      puppy7: {
        name: "Black Angel Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/angel.jpg",
        sold: "Sprzedana Czechy"
      },
      puppy8: {
        name: "Black Rosa Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/rosa.jpg",
        sold: "Sprzedana Polska"
      }
    }
  }
};

var fillDivWithTables = function fillDivWithTables() {
  var fillDiv = "";

  for (miot in allMiots) {
    fillDiv += "<h3>".concat(allMiots[miot].name, "</h3><br><h3>").concat(allMiots[miot].date, "</h3><br><h4>Rodzice:</h4><br><table>");
    fillDiv += "\n        <tr> \n            <th>Pies</th>\n            <th>Suka</th>\n        </tr>\n        <tr>\n            <td>".concat(allMiots[miot].parents.male.name, "</td>\n            <td>").concat(allMiots[miot].parents.female.name, "</td>\n        </tr>\n        <tr>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[miot].parents.male.img, "\" alt=\"").concat(allMiots[miot].parents.male.name, "\" width=\"300\" height=\"200\"></td>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[miot].parents.female.img, "\" alt=\"").concat(allMiots[miot].parents.female.name, "\" width=\"300\" height=\"200\"></td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[miot].parents.male.birth, "</td>\n            <td>").concat(allMiots[miot].parents.female.birth, "</td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[miot].parents.male.title, "</td>\n            <td>").concat(allMiots[miot].parents.female.title, "</td>\n        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imi\u0119</td><td>Obraz</td><td>Dost\u0119pno\u015B\u0107</td></tr>\n    ");

    for (var puppy in allMiots[miot].puppies) {
      fillDiv += "\n        <tr>\n            <td>".concat(allMiots[miot].puppies[puppy].name, "</td>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[miot].puppies[puppy].img, "\" alt=\"").concat(allMiots[miot].puppies[puppy].name, "\" width=\"300\" height=\"200\"></td>\n            <td>").concat(allMiots[miot].puppies[puppy].sold, "</td>\n        </tr>\n    ");
    }

    fillDiv += "</table><br><br>";
  }

  table.innerHTML = fillDiv;
};

document.addEventListener('DOMContentLoaded', function () {
  fillDivWithTables();
  table.style.border = "none";
});