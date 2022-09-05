let js = "amazing";
console.log(4 + 12 + 83 + 5);

console.log("Jonas");
console.log(45);

let firstName = "Jonas"; //declaring value of variable
let first = "jonas";
let firstNamePerson; //camelCase in JS
let first_name_; //f.e. in Ruby programming language

console.log(firstName);

/*  //don't name this way//
let 3 = hsdg //number as a name of variables
let new = 36 //reserved key words (function, $ & only"name", start with upperCase letter)
*/

let myFirstJob = "programmer";
let myCurrentJob = "teacher"; //these are more expressive name of variables

console.log(myFirstJob);

// 7 primitive DATA TYPES
// 1. number
// 2. STRINGS
// 3. BOOLEAN

// 4. UNDEFINED - not yet defined (empty values)
// 5. NULL
// 6. SYMBOL (ES2015) values that is unique and cannot be ChannelMergerNode
// 7. BigInt (ES2020) larger integers than the Number type can hold

// dynamic typing = automatically determined data types!!!
let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof jsIsFun);
console.log(typeof false);
console.log(typeof "mamma");
console.log(typeof null);

jsIsFun = "YES!";
console.log(jsIsFun);
console.log(typeof jsIsFun);

let year;
console.log(year);

year = 1985;
console.log(typeof year);

//do not repeat the same values f.e.

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// concatenation + String vs. `template String`

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = (massMark / heightMark ** 2).toPrecision(4);
const bmiJohn = (massJohn / heightJohn ** 2).toPrecision(4);
console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

const massMark2 = 95;
const massJohn2 = 79;
const heightMark2 = 1.65;
const heightJohn2 = 1.98;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = bmiMark < bmiJohn;
console.log(markHigherBMI2);
console.log(bmiJohn2);

//multiple lines old version
console.log('string with \n\
multiple\n\
lines');

//multiple lines new version with backsticks
console.log(`String
multiple
lines`);

const age = 17

if (age >= 18) {
    console.log('you can drive a car');
}
else {
    console.log('you are too young');
}

/*lesson 19Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

if (bmiMark > bmiJohn) {
console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}!`)}
else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}!`)  
}