const tableParents = document.getElementsByClassName("table-parents");
const tableChild = document.getElementsByClassName("table-children");

const parentsCG = {
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

const puppyCG = {
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

const fillParent = () => {
    const string = `
        <tr> 
            <th>Pies</th>
            <th>Suka</th>
        </tr>
        <tr>
            <td>${parentsCG.male.name}</td>
            <td>${parentsCG.female.name}</td>
        </tr>
        <tr>
            <td><img src="${parentsCG.male.img}" alt="${parentsCG.male.name}" width="300" height="200"></td>
            <td><img src="${parentsCG.female.img}" alt="${parentsCG.female.name}" width="300" height="200"></td>
        </tr>
        <tr>
            <td>${parentsCG.male.hair}</td>
            <td>${parentsCG.female.hair}</td>
        </tr>
        <tr>
            <td>${parentsCG.male.title}</td>
            <td>${parentsCG.female.title}</td>
        </tr>
    `;
    return string;
}

const fillChild = () => {
    let string = '<tr><td>Imię</td><td>Obraz</td><td>Namaszczenie</td><td>Dostępność</td></tr>';
    for (const puppy in puppyCG) {
        string += `
            <tr>
                <td>${puppyCG[puppy].name}</td>
                <td><img src="${puppyCG[puppy].img}" alt="${puppyCG[puppy].name}" width="300" height="200"></td>
                <td>${puppyCG[puppy].hair}</td>
                <td>${puppyCG[puppy].sold}</td>
            </tr>
        `;
    }
    return string;
}


document.addEventListener('DOMContentLoaded', function() {
    const stringParent = fillParent();
    const stringChild = fillChild();
    tableParents[0].innerHTML = stringParent;
    tableChild[0].innerHTML = stringChild;
});