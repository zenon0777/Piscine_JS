export {helloSomeone};
function helloSomeone(input) {
	if (input === '')
		console.log("Who are you?");
	else if (typeof input == 'string')
		console.log(`Hello ${input}!`);
	else if (input === null)
		console.log("I am null and void");
	else if (isNaN(input) && typeof input != 'undefined')
		console.log("Age is just a number");
	else if (typeof input == 'number' && input > 0)
		console.log("My age is ", input);
	else if (typeof input == 'number' && input <= 0)
		console.log("I am Benjamin Button!");
	else
		console.log("Nobody can define me!");
}

// helloSomeone("42");
// helloSomeone("");
// helloSomeone(null);
// helloSomeone(42);
// helloSomeone(-1);
// helloSomeone(NaN);
// helloSomeone(undefined);
