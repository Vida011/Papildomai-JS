
//PUSH stumia nauja reiksme i gala
const vaisiai = ['obuolys', 'kriause', 'citrina', 'apelsinas'];
vaisiai.push('ananasas'); // const kartoti nereikia
console.log(vaisiai);

// pop metodas ismeta paskutine reiksme is masyvo
vaisiai.pop(); // 
console.log(vaisiai);

// Shift() ismeta pirma teiksme
vaisiai.shift();
console.log(vaisiai);

vaisiai.push('obuolys','apelsinas');

//slice padaro kopija - nepakeicia masyvo
let nuslicintaReiksme = vaisiai.slice(2, 3);
console.log(nuslicintaReiksme);
console.log(vaisiai);


