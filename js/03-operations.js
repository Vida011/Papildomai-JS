// const duomenys = require('./02-loops.js');
import{neigiamiSkaiciai as duomenys} from './02-loops.js';

console.log(duomenys);

const vardas = 'Vida';
const pavarde = 'Verbaite';
const fullName = vardas + ' ' + pavarde;
// `${vardas} ${pavarde}`

console.log(fullName);
const introduction = 'Hi, my name is' + ' ' + vardas +'!';
// `${vardas} ${pavarde}`// sujungimas ilgame tekste
console.log(introduction);

const parduotuve = 'IKI';
const veiksmas = 'Einu apsipirkti';
const apsipirkimas = `${parduotuve} as ${veiksmas}`;
console.log(apsipirkimas);

const marks = [10, 3, 8, 4];
console.log(marks);


const marksSum = 10 + 3 + 8 + 4;
console.log(marksSum);

