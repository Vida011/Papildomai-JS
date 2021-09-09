
for (let i = 0; i < 5; i++) {
    console.log('labas');
}

// for (let index = 0; index < array.length; index++) { //
//     const element = array[index];
    
// }
const marks = [11, 2, 9, 6];

for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]); // atspausdina kiekviena masyvo nari zemyn
    if (marks[index] % 2 === 0) {
        console.log('lyginis');
    }
    else {
        console.log('nelyginis');
    }
}

const money = [20, 25, 30, 33, 53, 60, 101];
for (let index = 0; index < money.length; index++) {
   if (money[index] % 3 === 0) {
       console.log(`${money[index]} dalinasi is 3`);
   }
   else {
       console.log(`${money[index]} nesidalina is 3`);
   }
    
}
// pradedm nuo 0 ir paliekam paskuti masyvo nari
for (let index = 0; index < money.length-1; index++) {
    if (money[index] % 3 === 0) {
        console.log(`${money[index]} dalinasi is 3`);
    }
    else {
        console.log(`${money[index]} nesidalina is 3`);
    }
     
 }
 