const tableParents1 = document.getElementsByClassName("table1");
const tableParents2 = document.getElementsByClassName("table2");

const psy1 = {
    s1:{
        name:"MIGNON z Królestwa Motyli", 
        img:"./img/psy/mignon.jpg",
        birth:"2012-11-14",
        title:"PLCH  PLJCH  BGCH  MNCH  CZCH  DCH(Club)  HCH  INTCH(FCI)  LUXCH  MKCH  MOLCH  RUSCH  SRBCH  UKRCH  Campionul Basarabiei, Champion of Kosova, Champion of the Balkans"
    },
    s2:{
        name:"Lord Lary Kings Of Dreams", 
        img:"./img/psy/lary.jpg",
        birth:"2020-09-13",
        title:"PLCH  PLJCH  MOLCH  SRBCH "  
    },
    s3:{
        name:"Arpad Formidable De Maison Des Lys", 
        img:"./img/psy/pieta.jpg",
        birth:"2021-02-12",
        title:"PLCH  PLJCH  MOLCH"
    },
    s4:{
        name:"Merci La Azzaro Kings Of Dreams", 
        img:"./img/psy/azaro.jpg",
        birth:"2022-02-27",
        title:"PLCH  PLJCH MŁODZIEŻOWY INTCH(FCI)"
    }    
}

const psy2 = {
    s1:{
        name:"SUNSET DREAM LAST MAN STANDING", 
        img:"./img/psy/oli.jpg",
        birth:"2022-04-02",
        title:""
    }
}



const fillTable = (object) => {
    let string = '<tr><td>Imię</td><td>Zdjęcie</td><td>Data Urodzenia</td><td>Tytuły</td></tr>';
    for (const pies in object) {
        string += `
            <tr>
                <td>${object[pies].name}</td>
                <td><img id="zdjecia" src="${object[pies].img}" alt="${object[pies].name}" ></td>
                <td>${object[pies].birth}</td>
                <td>${object[pies].title}</td>
            </tr>
        `;
    }
    return string;
}



document.addEventListener('DOMContentLoaded', function() {
    const string1 = fillTable(psy1)
    tableParents1[0].innerHTML = string1;
    const string2 = fillTable(psy2)
    tableParents2[0].innerHTML = string2;
});