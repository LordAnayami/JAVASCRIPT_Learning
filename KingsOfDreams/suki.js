const tableParents = document.getElementsByClassName("table");

const suki = {
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
    for (const suka in suki) {
        string += `
            <tr>
                <td>${suki[suka].name}</td>
                <td><img src="${suki[suka].img}" alt="${suki[suka].name}" width="300" height="200"></td>
                <td>${suki[suka].hair}</td>
                <td>${suki[suka].birth}</td>
                <td>${suki[suka].sold}</td>
            </tr>
        `;
    }
    return string;
}



document.addEventListener('DOMContentLoaded', function() {
    const string = fillTable()
    tableParents[0].innerHTML = string;
});