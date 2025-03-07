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
for( let key in teams){
    teams[key]['pointsMade'] = randomNumber();
    teams[key]['fouls'] = randomNumber();
}
console.log(teams);

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const secondariTeams = [];
for(let i = 0; i < teams.length; i++){
    secondariTeams.push({
        neme : teams[i].name,
        fouls : teams[i].fouls,
    })
}

console.log(secondariTeams);

// funzione numeri random
function randomNumber() {
    return Math.floor(Math.random() * 80) + 1;
}

