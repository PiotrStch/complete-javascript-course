// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const jonasArray = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Michael", "Peter", "Steven"],
	true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
	console.log(jonasArray[i], typeof jonasArray[i]);

	types.push(typeof jonasArray[i]);
	// types[i] = typeof jonasArray[i]
}
console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}
console.log(ages);
