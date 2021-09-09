function sum(a, b) {
    return a + b;
}
const s1 = sum(4, 5);
console.log(s1);

const s2 = sum(14, 5);
console.log(s2);

const s3 = sum(4, -4);
console.log(s3);

function labas(vardas) {
    return `Labas, ${vardas}!`;
}

    // let vardas = Petras;

console.log(labas('Petrai'));

function kurisDidesnis(a, b) {
    return a > b? 'pirmas' : 'antras';
}
console.log(kurisDidesnis(7, 4));