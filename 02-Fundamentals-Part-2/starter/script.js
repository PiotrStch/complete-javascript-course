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

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const num4 = Number("36")