"use strict";

var table = document.getElementById("table");
var allMiots = {
  miot1: {
    name: "2010 A Chinese Crested",
    parents: {
      male: {
        name: "Mignon",
        img: "./img/Mignon.jpg",
        hair: "white",
        title: "XX,YY,ZZ"
      },
      female: {
        name: "Sissi",
        img: "./img/Sissi.jpg",
        hair: "black",
        title: "XX,YY,ZZ"
      }
    },
    puppies: {
      puppy1: {
        name: "XAX",
        img: "./img/Mignon.jpg",
        hair: "white",
        sold: "Sprzedany"
      },
      puppy2: {
        name: "CAS",
        img: "./img/Sissi.jpg",
        hair: "black",
        sold: "Wolny"
      }
    }
  },
  miot2: {
    name: "2011 B Chinese Crested",
    parents: {
      male: {
        name: "Mignon2",
        img: "./img/Mignon.jpg",
        hair: "white",
        title: "XX,YY,ZZ"
      },
      female: {
        name: "Sissi2",
        img: "./img/Sissi.jpg",
        hair: "black",
        title: "XX,YY,ZZ"
      }
    },
    puppies: {
      puppy1: {
        name: "XAX2",
        img: "./img/Mignon.jpg",
        hair: "white",
        sold: "Sprzedany"
      },
      puppy2: {
        name: "CAS2",
        img: "./img/Sissi.jpg",
        hair: "black",
        sold: "Wolny"
      }
    }
  }
};

var fillDivWithTables = function fillDivWithTables() {
  var fillDiv = "";

  for (miot in allMiots) {
    fillDiv += "<h3>".concat(allMiots[miot].name, "</h3><br><h4>Rodzice:</h4><br><table>");
    fillDiv += "\n        <tr> \n            <th>Pies</th>\n            <th>Suka</th>\n        </tr>\n        <tr>\n            <td>".concat(allMiots[miot].parents.male.name, "</td>\n            <td>").concat(allMiots[miot].parents.female.name, "</td>\n        </tr>\n        <tr>\n            <td><img src=\"").concat(allMiots[miot].parents.male.img, "\" alt=\"").concat(allMiots[miot].parents.male.name, "\" width=\"300\" height=\"200\"></td>\n            <td><img src=\"").concat(allMiots[miot].parents.female.img, "\" alt=\"").concat(allMiots[miot].parents.female.name, "\" width=\"300\" height=\"200\"></td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[miot].parents.male.hair, "</td>\n            <td>").concat(allMiots[miot].parents.female.hair, "</td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[miot].parents.male.title, "</td>\n            <td>").concat(allMiots[miot].parents.female.title, "</td>\n        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imi\u0119</td><td>Obraz</td><td>Namaszczenie</td><td>Dost\u0119pno\u015B\u0107</td></tr>\n    ");

    for (var puppy in allMiots[miot].puppies) {
      fillDiv += "\n        <tr>\n            <td>".concat(allMiots[miot].puppies[puppy].name, "</td>\n            <td><img src=\"").concat(allMiots[miot].puppies[puppy].img, "\" alt=\"").concat(allMiots[miot].puppies[puppy].name, "\" width=\"300\" height=\"200\"></td>\n            <td>").concat(allMiots[miot].puppies[puppy].hair, "</td>\n            <td>").concat(allMiots[miot].puppies[puppy].sold, "</td>\n        </tr>\n    ");
    }

    fillDiv += "</table><br><br>";
  }

  table.innerHTML = fillDiv;
};

document.addEventListener('DOMContentLoaded', function () {
  fillDivWithTables();
  table.style.border = "none";
});