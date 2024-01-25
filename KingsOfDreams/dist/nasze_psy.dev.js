"use strict";

var chooseOptions = document.getElementById("miots");
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

var fillOptions = function fillOptions() {
  var listOptions = "<option value=\"\">(Wybierz miot)</option>";

  for (var miot in allMiots) {
    listOptions += "<option value=\"".concat(miot, "\">").concat(allMiots[miot].name, "</option>");
  }

  return listOptions;
};

var fillDivWithTables = function fillDivWithTables(option) {
  if (option === "") return table.innerHTML = "";
  console.log(allMiots[option]);
  var fillDiv = "<p>Rodzice:</p><br><table>";
  fillDiv += "\n    <tr> \n        <th>Pies</th>\n        <th>Suka</th>\n    </tr>\n    <tr>\n        <td>".concat(allMiots[option].parents.male.name, "</td>\n        <td>").concat(allMiots[option].parents.female.name, "</td>\n    </tr>\n    <tr>\n        <td><img src=\"").concat(allMiots[option].parents.male.img, "\" alt=\"").concat(allMiots[option].parents.male.name, "\" width=\"300\" height=\"200\"></td>\n        <td><img src=\"").concat(allMiots[option].parents.female.img, "\" alt=\"").concat(allMiots[option].parents.female.name, "\" width=\"300\" height=\"200\"></td>\n    </tr>\n    <tr>\n        <td>").concat(allMiots[option].parents.male.hair, "</td>\n        <td>").concat(allMiots[option].parents.female.hair, "</td>\n    </tr>\n    <tr>\n        <td>").concat(allMiots[option].parents.male.title, "</td>\n        <td>").concat(allMiots[option].parents.female.title, "</td>\n    </tr></table><br><p>Szczeniaki:</p><br><table><tr><td>Imi\u0119</td><td>Obraz</td><td>Namaszczenie</td><td>Dost\u0119pno\u015B\u0107</td></tr>\n");

  for (var puppy in allMiots[option].puppies) {
    fillDiv += "\n        <tr>\n            <td>".concat(allMiots[option].puppies[puppy].name, "</td>\n            <td><img src=\"").concat(allMiots[option].puppies[puppy].img, "\" alt=\"").concat(allMiots[option].puppies[puppy].name, "\" width=\"300\" height=\"200\"></td>\n            <td>").concat(allMiots[option].puppies[puppy].hair, "</td>\n            <td>").concat(allMiots[option].puppies[puppy].sold, "</td>\n        </tr>\n    ");
  }

  fillDiv += "</table>";
  table.innerHTML = fillDiv;
};

document.addEventListener('DOMContentLoaded', function () {
  var listOptions = fillOptions();
  chooseOptions.innerHTML = listOptions;
  table.style.border = "none";
});
chooseOptions.addEventListener('change', function (event) {
  var wybranaOpcja = event.target.value;
  console.log(wybranaOpcja);
  fillDivWithTables(wybranaOpcja);
});