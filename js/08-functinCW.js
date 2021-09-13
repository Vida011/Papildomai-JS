// Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Very simple, given a number, find its opposite.

function opposite(number) {
  return number * -1;
}

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//     if (num ===)
// }

// Convert a Number to a String!
function numberToString(num) {}

// You get an array of numbers, return the sum of all of the positives ones.(1)
const array = [-2, 3, -5, 7];
function positiveSum() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      console.log(array[i]);
      sum = sum + array[i];
    }
  }

  console.log(sum);
}
positiveSum();


for (let i = 1; i < array.length; i = i + 2) {
  console.log(array[i]);
}

// You get an array of numbers, return the sum of all of the positives ones.(2)
function positiveSum(arr) {
  let sum = 0;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0) {
 
     sum = sum + arr[i];
   }
 } // CIKLO PABAIGA
   return sum 
} // FUNKCIJOS PABAIGA

KITŲ ŽMONIŲ SPRENDIMAI:
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total

