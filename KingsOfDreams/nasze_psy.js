const chooseOptions = document.getElementById("miots");
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

const fillOptions = () => {
    let listOptions = `<option value="">(Wybierz miot)</option>`;
    for (const miot in allMiots){
        listOptions += `<option value="${miot}">${allMiots[miot].name}</option>`;
    }
    return listOptions; 
}

const fillDivWithTables = (option) => {
    if (option === "") return table.innerHTML = "";
    console.log(allMiots[option])
    let fillDiv = "<p>Rodzice:</p><br><table>";
    fillDiv +=  `
    <tr> 
        <th>Pies</th>
        <th>Suka</th>
    </tr>
    <tr>
        <td>${allMiots[option].parents.male.name}</td>
        <td>${allMiots[option].parents.female.name}</td>
    </tr>
    <tr>
        <td><img src="${allMiots[option].parents.male.img}" alt="${allMiots[option].parents.male.name}" width="300" height="200"></td>
        <td><img src="${allMiots[option].parents.female.img}" alt="${allMiots[option].parents.female.name}" width="300" height="200"></td>
    </tr>
    <tr>
        <td>${allMiots[option].parents.male.hair}</td>
        <td>${allMiots[option].parents.female.hair}</td>
    </tr>
    <tr>
        <td>${allMiots[option].parents.male.title}</td>
        <td>${allMiots[option].parents.female.title}</td>
    </tr></table><br><p>Szczeniaki:</p><br><table><tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Dostępność</td></tr>
`
for (const puppy in allMiots[option].puppies) {
    fillDiv += `
        <tr>
            <td>${allMiots[option].puppies[puppy].name}</td>
            <td><img src="${allMiots[option].puppies[puppy].img}" alt="${allMiots[option].puppies[puppy].name}" width="300" height="200"></td>
            <td>${allMiots[option].puppies[puppy].hair}</td>
            <td>${allMiots[option].puppies[puppy].sold}</td>
        </tr>
    `;
}
fillDiv += "</table>"
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