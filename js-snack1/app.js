// Creare un array di oggetti
let bicycle = [
    {
        name : 'ragno',
        weight : 13,
    },
    {
        name : 'pluto',
        weight :20,
        
    },
    {
        name : 'nitro',
        weight : 18,

    },
    {
        name : 'lupo',
        weight : 25,
    },
    {
        name : 'leone',
        weight : 3,
    }
]

console.log(bicycle)

let bicycleWeight = bicycle[0]['weight'];
console.log(bicycleWeight)
let nameBicycle = bicycle[0];
console.log(nameBicycle);
//  ciclo per controllare la bici con il peso minore 
for( let key in bicycle){

    let control = (bicycle[key]['weight']);
   // console.log(control);

    const bicycleLowerWeight = (bicycle[key]);

    if(control < bicycleWeight){
        bicycleWeight = control;
        nameBicycle = bicycleLowerWeight;
    }
}
// stampoil nome e il peso della bici 
console.log(`La bici con il peso minore è ${nameBicycle.name} e pesa ${bicycleWeight}kg`)