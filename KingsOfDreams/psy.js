const tableParents = document.getElementsByClassName("table");

const psy = {
    s1:{
        name:"Mignon", 
        img:"./img/Mignon.jpg",
        hair:"white",
        birth:"XX.YY.ZZ",
        title:"XX,YY,ZZ"
    },
    s2:{
        name:"Sissi", 
        img:"./img/Sissi.jpg",
        hair:"black",
        birth:"XX.YY.ZZ",
        title:"XX,YY,ZZ"
    }
}



const fillTable = () => {
    let string = '<tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Urodzenie</td><td>Tytuły</td></tr>';
    for (const pies in psy) {
        string += `
            <tr>
                <td>${psy[pies].name}</td>
                <td><img src="${psy[pies].img}" alt="${psy[pies].name}" width="300" height="200"></td>
                <td>${psy[pies].hair}</td>
                <td>${psy[pies].birth}</td>
                <td>${psy[pies].sold}</td>
            </tr>
        `;
    }
    return string;
}



document.addEventListener('DOMContentLoaded', function() {
    const string = fillTable()
    tableParents[0].innerHTML = string;
});