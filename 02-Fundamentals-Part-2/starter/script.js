"use strict"; //pomaga znaleźć błędy

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Ican drive");

// const interface = 'Audio'
// const private = 8367
// const 6dj8 = 78

// FUNCTIONS

function logger() {
	console.log("ciało funkcji");
}

// calling, invoking, running function
logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const num4 = Number("36");

// Function declaration
function calcAge1(birthYear) {
	//parameter
	// const age = 2037 - birthYear;
	// return age;
	return 2037 - birthYear;
}

const age1 = calcAge1(1991); //argument
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
	//annonymous function
	return 2037 - birthYear;
};

const age2 = calcAge2(1985);
console.log(age1, age2);

// ARROW FUNCTION

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Piotr"));

function cutFruitPieces(fruit) {
	return fruit * 8;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	console.log(apples, oranges);
	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
	return juice;
}

console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let resultDolph = calcAverage(44, 23, 71);
let resultKoala = calcAverage(65, 54, 49);

const checkWinners = function (resultDolph, resultKoala) {
	if (resultDolph > resultKoala) {
		console.log(`Dolphins win (${resultDolph} vs. ${resultKoala})`);
	} else {
					console.log(`Koalas win (${resultKoala} vs. ${resultDolph})`)
	}
	}

checkWinners(resultDolph, resultKoala)

resultDolph = calcAverage(59,166,45)
resultKoala = calcAverage(1, 12, 5)
checkWinners(resultDolph, resultKoala)
