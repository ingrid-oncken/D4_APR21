/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
console.log("\n\n----------EXERCISE 1----------");

let s1 = 5;
let s2 = 7;

const area = function (l1, l2) {
  return l1 * l2;
};

let calcArea = area(s1, s2);
console.log(`The area of ${s1} and ${s2} is equal to ${calcArea}`);

console.log("-----------------------------\n\n");

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values 
are the same then it should return their sum multiplied by 3.
*/
console.log("----------EXERCISE 2----------");

let n1 = 20;
let n2 = 10;

const crazySum = function (i1, i2) {
  if (i1 === i2) {
    return (i1 + i2) * 3;
  } else {
    return i1 + i2;
  }
};

let sumFunc = crazySum(n1, n2);
console.log(`The crazy sum of ${n1} and ${n2} is equal to ${sumFunc}`);

console.log("-----------------------------\n\n");

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("----------EXERCISE 3----------");

let nSubstract = 15;

const crazyDiff = function (nSubstract) {
  if (nSubstract > 19) {
    return nSubstract * 3;
  } else {
    return nSubstract - 19;
  }
};

let difFunc = crazyDiff(nSubstract, 19);
console.log(`The crazyDiff of ${nSubstract} and 19 is equal to ${difFunc}`);

console.log("-----------------------------\n\n");
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

console.log("----------EXERCISE 4----------");

const boundary = function (n) {
  (20 <= n && n <= 100) || n === 400 ? console.log(true) : console.log(false);
};

boundary(3);
boundary(33);
boundary(333);
boundary(400);

console.log("-----------------------------\n\n");

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
then it should just return the original string.
*/

console.log("----------EXERCISE 5----------");

const strivify = function (str1) {
  !str1.startsWith(`Strive`)
    ? console.log(`Strive ${str1}`)
    : console.log(` ${str1}`);
};

strivify(`is the best school in EU`);
strivify(`Strive is for strong people`);

console.log("-----------------------------\n\n");
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

console.log("----------EXERCISE 6----------");

let numero = Math.floor(Math.random() * 100) + 1;

const check3and7 = function (numero) {
  numero % 3 === 0 || numero % 7 === 0 ? console.log(true) : console.log(false);
};
console.log(`Is ${numero} divisible by 3 or 7?`);
check3and7(numero);

console.log("-----------------------------\n\n");

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

console.log("----------EXERCISE 7----------");

let quote = `victory is always possible for the person who refuses to stop fighting. - Napoleon Hill`;

const reverseString = function (quote) {
  /* let revesedQuote =  */
  console.log(quote.split(``).reverse().join(``));
  /*   return revesedQuote; */
};
reverseString(quote);
/* console.log(reversedQuote); */

console.log("-----------------------------\n\n");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

console.log("----------EXERCISE 8----------");

let quote2 = `do what you can, with what you have, where you are. - Theodore Roosevelt`;

const upperFirst = function (quote2) {
  console.log(quote2[0].toUpperCase() + quote2.slice(1)); //I wish I could make a loop and be able to capitalize every first letter from each word
};
upperFirst(quote2);

console.log("-----------------------------\n\n");

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

console.log("----------EXERCISE 9----------");

console.log("-----------------------------\n\n");

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("----------EXERCISE 10----------");

console.log("-----------------------------\n\n");

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
