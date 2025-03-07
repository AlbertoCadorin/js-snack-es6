// un array di oggetti di squadre di calcio
let teams =[
    {
        name : 'barcellona',
        pointsMade : 0,
        fouls : 0
    },
    {
        name : 'juventus',
        pointsMade : 0,
        fouls : 0
    },
    {
        name : 'milan',
        pointsMade : 0,
        fouls : 0
    },
    {
        name : 'inter',
        pointsMade : 0,
        fouls : 0
    },
    {
        name : 'real madrid',
        pointsMade : 0,
        fouls : 0
    }
]

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”
for( let i = 0; i < teams.length; i++){
    teams[i]['pointsMade'] = randomNumber();
    teams[i]['fouls'] = randomNumber();
}
console.log(teams);

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const secondariTeams = [];
let printIner = '';
for(let i = 0; i < teams.length; i++){
    secondariTeams.push({
        neme : teams[i].name,
        fouls : teams[i].fouls,
    })
    printIner += `<p> nome ${teams[i].name}</p> <p> falli ${teams[i].fouls}</p>`
}

console.log(secondariTeams);

const printElement = document.getElementById('print');
printElement.innerHTML = printIner;


// funzione numeri random
function randomNumber() {
    return Math.floor(Math.random() * 80) + 1;
}

