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
        }
    }
}


const fillDivWithTables = () => {
    if (allMiots !== ""){
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
            </tr></table><br><br>`
        }
          
    table.innerHTML = fillDiv;
    }else table.innerHTML = "<p>Brak planowanych miotów.</p>"
}

document.addEventListener('DOMContentLoaded', function() {
    fillDivWithTables();
    table.style.border = "none";
});