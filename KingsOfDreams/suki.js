const tableParents1 = document.getElementsByClassName("table1");
const tableParents2 = document.getElementsByClassName("table2");
const tableParents3 = document.getElementsByClassName("table3");

const suki1 = {
    s1:{
        name:"Falvara Sisi Milfra-Moravia", 
        img:"./img/suki/sisi.jpg",
        birth:"2015-03-03",
        title:"PLCH  PLJCH  BGCH  MNCH  HCH  INTCH(FCI)  LUXCH  MKCH  MOLJCH  RUSCH  SRBCH  Campionul Junior Al Basarabiei, Champion of Kosova, Champion of the Balkans"
    },
    s2:{
        name:"Charlotta Kings Of Dreams", 
        img:"./img/suki/lary.jpg",
        birth:"2018-05-28",
        title:"PLCH  PLJCH  BLRCH  BIHCH  INTCH(FCI)  MOLCH"  
    },
    s3:{
        name:"Lady Daisy Kings of Dreams", 
        img:"./img/Sissi.jpg",
        birth:"2020-09-13",
        title:"PLCH  PLJCH  MOLCH"
    },
    s4:{
        name:"Lady Liliana Kings Of Dreams", 
        img:"./img/Sissi.jpg",
        birth:"2020-09-13",
        title:"PLCH  PLJCH  SRBCH"
    },
    s5:{
        name:"Merci La Blanca Kings Of Dreams", 
        img:"./img/Sissi.jpg",
        birth:"2022-02-27",
        title:""
    },
    s6:{
        name:"Merci La Coco Chanel Kings Of Dreams", 
        img:"./img/Sissi.jpg",
        birth:"2022-02-27",
        title:"PLJCH  HSHCH"
    },
    s7:{
        name:"Black Nela Kings Of Dreams", 
        img:"./img/Sissi.jpg",
        birth:"2023-07-31",
        title:""
    }
}

const suki2 = {
    s1:{
        name:"SUNSET DREAM KISS ME BLISS ME", 
        img:"./img/Sissi.jpg",
        birth:"2021-09-18",
        title:""
    }
}

const suki3 = {
    s1:{
        name:"Maalum Uzuri Hypnosis Black Pearl", 
        img:"./img/Sissi.jpg",
        birth:"2018-02-05",
        title:""
    }
}


const fillTable = (object) => {
    let string = '<tr><td>Imię</td><td>Zdjęcie</td><td>Data Urodzenia</td><td>Tytuły</td></tr>';
    for (const suka in object) {
        string += `
            <tr>
                <td>${object[suka].name}</td>
                <td><img id="zdjecia" src="${object[suka].img}" alt="${object[suka].name}" ></td>
                <td>${object[suka].birth}</td>
                <td>${object[suka].title}</td>
            </tr>
        `;
    }
    return string;
}



document.addEventListener('DOMContentLoaded', function() {
    const string1 = fillTable(suki1)
    tableParents1[0].innerHTML = string1;
    const string2 = fillTable(suki2)
    tableParents2[0].innerHTML = string2;
    const string3 = fillTable(suki3)
    tableParents3[0].innerHTML = string3;
});