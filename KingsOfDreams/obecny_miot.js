const table = document.getElementById("table");

let allMiots = {
    miot2023B: {
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


const fillDivWithTables = () => {

    let fillDiv = "";
    for (miot in allMiots){
        fillDiv += `<h3>${allMiots[miot].name}</h3><br><h3>${allMiots[miot].date}</h3><br><h4>Rodzice:</h4><br><table>`;
        fillDiv += `
        <tr> 
            <th>Pies</th>
            <th>Suka</th>
        </tr>
        <tr>
            <td>${allMiots[miot].parents.male.name}</td>
            <td>${allMiots[miot].parents.female.name}</td>
        </tr>
        <tr>
            <td><img id="zdjecia" src="${allMiots[miot].parents.male.img}" alt="${allMiots[miot].parents.male.name}" width="300" height="200"></td>
            <td><img id="zdjecia" src="${allMiots[miot].parents.female.img}" alt="${allMiots[miot].parents.female.name}" width="300" height="200"></td>
        </tr>
        <tr>
            <td>${allMiots[miot].parents.male.birth}</td>
            <td>${allMiots[miot].parents.female.birth}</td>
        </tr>
        <tr>
            <td>${allMiots[miot].parents.male.title}</td>
            <td>${allMiots[miot].parents.female.title}</td>
        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imię</td><td>Obraz</td><td>Dostępność</td></tr>
    `

    for (const puppy in allMiots[miot].puppies) {
    fillDiv += `
        <tr>
            <td>${allMiots[miot].puppies[puppy].name}</td>
            <td><img id="zdjecia" src="${allMiots[miot].puppies[puppy].img}" alt="${allMiots[miot].puppies[puppy].name}" width="300" height="200"></td>
            <td>${allMiots[miot].puppies[puppy].sold}</td>
        </tr>
    `; 
    }   
    fillDiv += "</table><br><br>"
    }
      
table.innerHTML = fillDiv;
}

document.addEventListener('DOMContentLoaded', function() {
    fillDivWithTables();
    table.style.border = "none";
});

