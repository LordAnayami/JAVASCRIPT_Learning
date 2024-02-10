"use strict";

var chooseOptions = document.getElementById("miots");
var table = document.getElementById("table");
var allMiots = {
  miot2018C: {
    name: "2018 C Chinese Crested",
    date: "2018-05-28",
    parents: {
      male: {
        name: "MIGNON z Królestwa Motyli",
        img: "./img/psy/mignon2.jpg",
        birth: "2012-11-14",
        title: "PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
      },
      female: {
        name: "Falvara Sisi Milfra-Moravia",
        img: "./img/suki/sisi2.jpg",
        birth: "2015-03-03",
        title: "PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
      }
    },
    puppies: {
      puppy1: {
        name: "CARAT Kings of Dreams",
        img: "./img/szczeniaki/C2018CHG/carat.jpg",
        sold: "Włochy"
      },
      puppy2: {
        name: "CADILIANA Kings of Dreams",
        img: "./img/szczeniaki/C2018CHG/cadiliana.jpg",
        sold: "Dania"
      },
      puppy3: {
        name: "COCO Kings of Dreams",
        img: "./img/szczeniaki/C2018CHG/coco.jpg",
        sold: "USA"
      },
      puppy4: {
        name: "CARMELA Kings of Dreams",
        img: "./img/szczeniaki/C2018CHG/carmela.jpg",
        sold: "USA"
      },
      puppy5: {
        name: "CHARLOTTA Kings of Dreams",
        img: "./img/suki/charlota.jpg",
        sold: "Hodowla"
      }
    }
  },
  miot2020L: {
    name: "2020 L Chinese Crested",
    date: "2020-09-13",
    parents: {
      male: {
        name: "MIGNON z Królestwa Motyli",
        img: "./img/psy/mignon3.jpg",
        birth: "2012-11-14",
        title: "PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
      },
      female: {
        name: "Falvara Sisi Milfra-Moravia",
        img: "./img/suki/sisi3.jpg",
        birth: "2015-03-03",
        title: "PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
      }
    },
    puppies: {
      puppy1: {
        name: "LORD LARY Kings of Dreams",
        img: "./img/psy/lary.jpg",
        sold: "Hodowla"
      },
      puppy2: {
        name: "LORD DIEGO Kings of Dreams",
        img: "./img/szczeniaki/L2020CHG/diego.jpg",
        sold: "Szwecja"
      },
      puppy3: {
        name: "LADY DAISY Kings of Dreams",
        img: "./img/szczeniaki/L2020CHG/daisy.jpg",
        sold: "Hodowla"
      },
      puppy4: {
        name: "LADY LILIANA Kings of Dreams",
        img: "./img/szczeniaki/L2020CHG/lili.jpg",
        sold: "Hodowla"
      },
      puppy5: {
        name: "LADY STELLA Kings of Dreams",
        img: "./img/szczeniaki/L2020CHG/stella.jpg",
        sold: "USA"
      },
      puppy6: {
        name: "LADY DIANA Kings of Dreams",
        img: "./img/szczeniaki/L2020CHG/diana.jpg",
        sold: "Wielka Brytania"
      }
    }
  },
  miot2020M: {
    name: "2020 M Chinese Crested",
    date: "2022-02-27",
    parents: {
      male: {
        name: "Razem Czy Osobno Next Germanika",
        img: "./img/psy/razem.jpg",
        birth: "2016-06-11",
        title: "PLCH  BOG4"
      },
      female: {
        name: "CHARLOTTA Kings of Dreams",
        img: "./img/suki/charlota.jpg",
        birth: "2018-05-28",
        title: "PLCH  PLJCH  BLRCH  BIHCH  INTCH(FCI)  MOLCH"
      }
    },
    puppies: {
      puppy1: {
        name: "Merci La Azzaro Kings Of Dreams",
        img: "./img/psy/azaro.jpg",
        sold: "Hodowla"
      },
      puppy2: {
        name: "Merci La Armani Kings Of Dreams",
        img: "./img/szczeniaki/M2022CHG/armani.jpg",
        sold: "Polska"
      },
      puppy3: {
        name: "Merci La Dior Kings Of Dreams",
        img: "./img/szczeniaki/M2022CHG/dior.jpg",
        sold: "Polska"
      },
      puppy4: {
        name: "Merci La Coco Chanel Kings Of Dreams",
        img: "./img/suki/koki.jpg",
        sold: "Hodowla"
      },
      puppy5: {
        name: "Merci La Blanca Kings Of Dreams",
        img: "./img/szczeniaki/M2022CHG/blanka.jpg",
        sold: "Hodowla"
      }
    }
  },
  miot203B: {
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
        sold: "Polska"
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
        sold: "Czechy"
      },
      puppy8: {
        name: "Black Rosa Kings of Dreams",
        img: "./img/szczeniaki/B2024CHG/rosa.jpg",
        sold: "Polska"
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

var fillDivWithTables = function fillDivWithTables(opcja) {
  var fillDiv = "";
  fillDiv += "<h3>".concat(allMiots[opcja].name, "</h3><br><h3>").concat(allMiots[opcja].date, "</h3><br><h4>Rodzice:</h4><br><table>");
  fillDiv += "\n        <tr> \n            <th>Pies</th>\n            <th>Suka</th>\n        </tr>\n        <tr>\n            <td>".concat(allMiots[opcja].parents.male.name, "</td>\n            <td>").concat(allMiots[opcja].parents.female.name, "</td>\n        </tr>\n        <tr>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[opcja].parents.male.img, "\" alt=\"").concat(allMiots[opcja].parents.male.name, "\" width=\"300\" height=\"200\"></td>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[opcja].parents.female.img, "\" alt=\"").concat(allMiots[opcja].parents.female.name, "\" width=\"300\" height=\"200\"></td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[opcja].parents.male.birth, "</td>\n            <td>").concat(allMiots[opcja].parents.female.birth, "</td>\n        </tr>\n        <tr>\n            <td>").concat(allMiots[opcja].parents.male.title, "</td>\n            <td>").concat(allMiots[opcja].parents.female.title, "</td>\n        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imi\u0119</td><td>Obraz</td><td>Dost\u0119pno\u015B\u0107</td></tr>\n    ");

  for (var puppy in allMiots[opcja].puppies) {
    fillDiv += "\n        <tr>\n            <td>".concat(allMiots[opcja].puppies[puppy].name, "</td>\n            <td><img id=\"zdjecia\" src=\"").concat(allMiots[opcja].puppies[puppy].img, "\" alt=\"").concat(allMiots[opcja].puppies[puppy].name, "\" width=\"300\" height=\"200\"></td>\n            <td>").concat(allMiots[opcja].puppies[puppy].sold, "</td>\n        </tr>\n    ");
  }

  fillDiv += "</table><br><br>";
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