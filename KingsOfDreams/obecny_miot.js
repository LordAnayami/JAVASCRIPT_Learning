const table = document.getElementById("table");

let allMiots = {
    miot1: {
        name: "2010 A Chinese Crested",
        parents: {
            male:{
                name:"Mignon", 
                img:"./img/Mignon.jpg",
                hair:"white",
                title:"XX,YY,ZZ"
            },
            female:{
                name:"Sissi", 
                img:"./img/Sissi.jpg",
                hair:"black",
                title:"XX,YY,ZZ"
            }
        },
        puppies: {
            puppy1:{
                name:"XAX", 
                img:"./img/Mignon.jpg",
                hair:"white",
                sold:"Sprzedany"
            },
            puppy2:{
                name:"CAS", 
                img:"./img/Sissi.jpg",
                hair:"black",
                sold:"Wolny"
            }
        }
    },
    miot2: {
        name: "2011 B Chinese Crested",
        parents: {
            male:{
                name:"Mignon2", 
                img:"./img/Mignon.jpg",
                hair:"white",
                title:"XX,YY,ZZ"
            },
            female:{
                name:"Sissi2", 
                img:"./img/Sissi.jpg",
                hair:"black",
                title:"XX,YY,ZZ"
            }
        },
        puppies: {
            puppy1:{
                name:"XAX2", 
                img:"./img/Mignon.jpg",
                hair:"white",
                sold:"Sprzedany"
            },
            puppy2:{
                name:"CAS2", 
                img:"./img/Sissi.jpg",
                hair:"black",
                sold:"Wolny"
            }
        }
    }
}


const fillDivWithTables = () => {

    let fillDiv = "";
    for (miot in allMiots){
        fillDiv += `<h3>${allMiots[miot].name}</h3><br><h4>Rodzice:</h4><br><table>`;
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
            <td><img src="${allMiots[miot].parents.male.img}" alt="${allMiots[miot].parents.male.name}" width="300" height="200"></td>
            <td><img src="${allMiots[miot].parents.female.img}" alt="${allMiots[miot].parents.female.name}" width="300" height="200"></td>
        </tr>
        <tr>
            <td>${allMiots[miot].parents.male.hair}</td>
            <td>${allMiots[miot].parents.female.hair}</td>
        </tr>
        <tr>
            <td>${allMiots[miot].parents.male.title}</td>
            <td>${allMiots[miot].parents.female.title}</td>
        </tr></table><br><h4>Szczeniaki:</h4><br><table><tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Dostępność</td></tr>
    `

    for (const puppy in allMiots[miot].puppies) {
    fillDiv += `
        <tr>
            <td>${allMiots[miot].puppies[puppy].name}</td>
            <td><img src="${allMiots[miot].puppies[puppy].img}" alt="${allMiots[miot].puppies[puppy].name}" width="300" height="200"></td>
            <td>${allMiots[miot].puppies[puppy].hair}</td>
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

