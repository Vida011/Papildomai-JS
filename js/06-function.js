function sandauga (a, b) { // funkcijos apsirasymas
    return a * b;  // funkcijos apsirasymas
}
sandauga (5, 5);  // funkcijos iskvietimas su parametrais

let atsakymas = sandauga (5, 5); // priskirta kintamajam atsakymas
console.log(atsakymas);

function sandaugaSuPradinemReiksmem (a = 5, b = 3) { 
    return a * b; 
}
sandaugaSuPradinemReiksmem()
console.log(sandaugaSuPradinemReiksmem());

let pakeistosPradinesReiksmes = sandaugaSuPradinemReiksmem (10, 10);
console.log(pakeistosPradinesReiksmes);


