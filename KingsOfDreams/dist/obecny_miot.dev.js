"use strict";

var tableParents = document.getElementsByClassName("table-parents");
var tableChild = document.getElementsByClassName("table-children");
var parentsCG = {
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
};
var puppyCG = {
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
};

var fillParent = function fillParent() {
  var string = "\n        <tr> \n            <th>Pies</th>\n            <th>Suka</th>\n        </tr>\n        <tr>\n            <td>".concat(parentsCG.male.name, "</td>\n            <td>").concat(parentsCG.female.name, "</td>\n        </tr>\n        <tr>\n            <td><img src=\"").concat(parentsCG.male.img, "\" alt=\"").concat(parentsCG.male.name, "\" width=\"300\" height=\"200\"></td>\n            <td><img src=\"").concat(parentsCG.female.img, "\" alt=\"").concat(parentsCG.female.name, "\" width=\"300\" height=\"200\"></td>\n        </tr>\n        <tr>\n            <td>").concat(parentsCG.male.hair, "</td>\n            <td>").concat(parentsCG.female.hair, "</td>\n        </tr>\n        <tr>\n            <td>").concat(parentsCG.male.title, "</td>\n            <td>").concat(parentsCG.female.title, "</td>\n        </tr>\n    ");
  return string;
};

var fillChild = function fillChild() {
  var string = '<tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Dostępność</td></tr>';

  for (var puppy in puppyCG) {
    string += "\n            <tr>\n                <td>".concat(puppyCG[puppy].name, "</td>\n                <td><img src=\"").concat(puppyCG[puppy].img, "\" alt=\"").concat(puppyCG[puppy].name, "\" width=\"300\" height=\"200\"></td>\n                <td>").concat(puppyCG[puppy].hair, "</td>\n                <td>").concat(puppyCG[puppy].sold, "</td>\n            </tr>\n        ");
  }

  return string;
};

document.addEventListener('DOMContentLoaded', function () {
  var stringParent = fillParent();
  var stringChild = fillChild();
  tableParents[0].innerHTML = stringParent;
  tableChild[0].innerHTML = stringChild;
});