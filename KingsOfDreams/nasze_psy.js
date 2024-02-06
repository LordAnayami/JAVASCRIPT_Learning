const chooseOptions = document.getElementById("miots");
const table = document.getElementById("table");

let allMiots = {
    miot2018C: {
        name: "2018 C Chinese Crested",
        date:"2018-05-28",
        parents: {
            male:{
                name:"MIGNON z Królestwa Motyli", 
                img:"./img/psy/mignon2.jpg",
                birth:"2012-11-14",
                title:"PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
            },
            female:{
                name:"Falvara Sisi Milfra-Moravia", 
                img:"./img/suki/sisi2.jpg",
                birth:"2015-03-03",
                title:"PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
            }
        },
        puppies: {
            puppy1:{
                name:"CARAT Kings of Dreams", 
                img:"./img/szczeniaki/C2018CHG/carat.jpg",
                sold:"Sprzedany Włochy"
            },
            puppy2:{
                name:"CADILIANA Kings of Dreams", 
                img:"./img/szczeniaki/C2018CHG/cadiliana.jpg",
                sold:"Sprzedana Dania"
            },
            puppy3:{
                name:"COCO Kings of Dreams", 
                img:"./img/szczeniaki/C2018CHG/coco.jpg",
                sold:"Sprzedana USA"
            },
            puppy4:{
                name:"CARMELA Kings of Dreams", 
                img:"./img/szczeniaki/C2018CHG/carmela.jpg",
                sold:"Sprzedana USA"
            },
            puppy5:{
                name:"CHARLOTTA Kings of Dreams", 
                img:"./img/suki/charlota.jpg",
                sold:"Hodowla"
            }
        }
    },
    miot2020L: {
        name: "2020 L Chinese Crested",
        date:"2020-09-13",
        parents: {
            male:{
                name:"MIGNON z Królestwa Motyli", 
                img:"./img/psy/mignon3.jpg",
                birth:"2012-11-14",
                title:"PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
            },
            female:{
                name:"Falvara Sisi Milfra-Moravia", 
                img:"./img/suki/sisi3.jpg",
                birth:"2015-03-03",
                title:"PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
            }
        },
        puppies: {
            puppy1:{
                name:"LORD LARY Kings of Dreams", 
                img:"./img/psy/lary.jpg",
                sold:"Hodowla"
            },
            puppy2:{
                name:"LORD DIEGO Kings of Dreams", 
                img:"./img/szczeniaki/L2020CHG/cadiliana.jpg",
                sold:"Sprzedany Szwecja"
            },
            puppy3:{
                name:"LADY DAISY Kings of Dreams", 
                img:"./img/suki/daisy.jpgz",
                sold:"Hodowla"
            },
            puppy4:{
                name:"LADY LILIANA Kings of Dreams", 
                img:"./img/suki/lili.jpg",
                sold:"Hodowla"
            },
            puppy5:{
                name:"LADY STELLA Kings of Dreams", 
                img:"./img/szczeniaki/L2020CHG/stella.jpg",
                sold:"Sprzedana USA"
            },
            puppy6:{
                name:"LADY DIANA Kings of Dreams", 
                img:"./img/szczeniaki/L2020CHG/stella.jpg",
                sold:"Sprzedana Wielka Brytania"
            }
        }
    },
    miot203B: {
        name: "2023 B Chinese Crested",
        date:"2023-07-31",
        parents: {
            male:{
                name:"Arpad Formidable De Maison Des Lys", 
                img:"./img/psy/pieta.jpg",
                birth:"2021-02-12",
                title:"PLCH  PLJCH  MOLCH"
            },
            female:{
                name:"Charlotta Kings Of Dreams", 
                img:"./img/suki/charlota.jpg",
                birth:"2018-05-28",
                title:"PLCH  PLJCH  BLRCH  BIHCH  INTCH(FCI)  MOLCH"
            }
        },
        puppies: {
            puppy1:{
                name:"Black Aron Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/aron.jpg",
                sold:"Sprzedany Polska"
            },
            puppy2:{
                name:"Black Diego Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/diego.jpg",
                sold:"Wolny"
            },
            puppy3:{
                name:"Black Boss Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/boss.jpg",
                sold:"Wolny"
            },
            puppy4:{
                name:"Black Nela Kings of Dreams", 
                img:"./img/suki/nela.jpg",
                sold:"Hodowla"
            },
            puppy5:{
                name:"Black Scarlet Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/scarlet.jpg",
                sold:"Wolna"
            },
            puppy6:{
                name:"Black Perla Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/perla.jpg",
                sold:"Wolna"
            },
            puppy7:{
                name:"Black Angel Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/angel.jpg",
                sold:"Sprzedana Czechy"
            },
            puppy8:{
                name:"Black Rosa Kings of Dreams", 
                img:"./img/szczeniaki/B2024CHG/rosa.jpg",
                sold:"Sprzedana Polska"
            }
        }
    }
}

const fillOptions = () => {
    let listOptions = `<option value="">(Wybierz miot)</option>`;
    for (const miot in allMiots){
        listOptions += `<option value="${miot}">${allMiots[miot].name}</option>`;
    }
    return listOptions; 
}

const fillDivWithTables = (opcja) => {

    let fillDiv = "";
    
        fillDiv += `<h3>${allMiots[opcja].name}</h3><br><h3>${allMiots[opcja].date}</h3><br><h4>Rodzice:</h4><br><table>`;
        fillDiv += `
        <tr> 
            <th>Pies</th>
            <th>Suka</th>
        </tr>
        <tr>
            <td>${allMiots[opcja].parents.male.name}</td>
            <td>${allMiots[opcja].parents.female.name}</td>
        </tr>
        <tr>
            <td><img id="zdjecia" src="${allMiots[opcja].parents.male.img}" alt="${allMiots[opcja].parents.male.name}" width="300" height="200"></td>
            <td><img id="zdjecia" src="${allMiots[opcja].parents.female.img}" alt="${allMiots[opcja].parents.female.name}" width="300" height="200"></td>
        </tr>
        <tr>
            <td>${allMiots[opcja].parents.male.birth}</td>
            <td>${allMiots[opcja].parents.female.birth}</td>
        </tr>
        <tr>
            <td>${allMiots[opcja].parents.male.title}</td>
            <td>${allMiots[opcja].parents.female.title}</td>
        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imię</td><td>Obraz</td><td>Dostępność</td></tr>
    `

    for (const puppy in allMiots[opcja].puppies) {
    fillDiv += `
        <tr>
            <td>${allMiots[opcja].puppies[puppy].name}</td>
            <td><img id="zdjecia" src="${allMiots[opcja].puppies[puppy].img}" alt="${allMiots[opcja].puppies[puppy].name}" width="300" height="200"></td>
            <td>${allMiots[opcja].puppies[puppy].sold}</td>
        </tr>
    `; 
    }   
    fillDiv += "</table><br><br>"
    
      
table.innerHTML = fillDiv;
}

document.addEventListener('DOMContentLoaded', function() {
    const listOptions = fillOptions();
    chooseOptions.innerHTML = listOptions;
    table.style.border = "none";
});



chooseOptions.addEventListener('change', (event) => {
    const wybranaOpcja = event.target.value;
    console.log(wybranaOpcja)
    fillDivWithTables(wybranaOpcja);
});