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
    }
  }
};

var fillDivWithTables = function fillDivWithTables() {
  if (allMiots !== "") {
    var fillDiv = "";

    for (miot in allMiots) {
      fillDiv += "<h3>".concat(allMiots[miot].name, "</h3><br><h4>Rodzice:</h4><br><table>");
      fillDiv += "\n            <tr> \n                <th>Pies</th>\n                <th>Suka</th>\n            </tr>\n            <tr>\n                <td>".concat(allMiots[miot].parents.male.name, "</td>\n                <td>").concat(allMiots[miot].parents.female.name, "</td>\n            </tr>\n            <tr>\n                <td><img src=\"").concat(allMiots[miot].parents.male.img, "\" alt=\"").concat(allMiots[miot].parents.male.name, "\" width=\"300\" height=\"200\"></td>\n                <td><img src=\"").concat(allMiots[miot].parents.female.img, "\" alt=\"").concat(allMiots[miot].parents.female.name, "\" width=\"300\" height=\"200\"></td>\n            </tr>\n            <tr>\n                <td>").concat(allMiots[miot].parents.male.hair, "</td>\n                <td>").concat(allMiots[miot].parents.female.hair, "</td>\n            </tr>\n            <tr>\n                <td>").concat(allMiots[miot].parents.male.title, "</td>\n                <td>").concat(allMiots[miot].parents.female.title, "</td>\n            </tr></table><br><br>");
    }

    table.innerHTML = fillDiv;
  } else table.innerHTML = "<p>Brak planowanych miotów.</p>";
};

document.addEventListener('DOMContentLoaded', function () {
  fillDivWithTables();
  table.style.border = "none";
});