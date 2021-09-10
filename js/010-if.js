// Reikšmės:
// true
// false

// PALYGINIMO OPERATORIAI:
// visi: >, <, ===, !==(ne lygu), <=, >=

// ŠABLONAI:
// if () {}
// if () {} else {}

// const a = 4;
// const b = 8;

// if (a < b) { // jeigu tai tiesa, tai tada vykdyk 1-a logikos bloką, jeigu netiesa-nevykdom ir važiuojam toliau.
//     console.log('A yra maziau už B'); // kodėl taip leidžia sapusdinti jeigu čia rašau "daugiau"?
// } else {
//     console.log('A nera maziau už B');
// }

// if (5 != 8) { //ar 5 lygu 8? nelygu
//     console.log('penki nelygu astuoniem'); //spausdins
// }

const astuoniolikaNumber = 18;
const astuoniolikaString = '18';
if (astuoniolikaNumber === astuoniolikaString) {
    console.log('taip'); // su dviguba = 'TAIP', nes dviguba = tikrina tiktai reiksme, bet ne tipa
} else {
    console.log('ne'); // su === spausdins 'NE'
       // === pirmiausia tikrina tipa, o tik paskui reiksme!
}
