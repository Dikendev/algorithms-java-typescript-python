/**
 * Countdown
 * @param i {number} i Number
 */

function countdown(i: number): void {
	console.log(i);
	//base case

	if (i <= 0) return;
	countdown(--i);
}

// Countdown(5);

function factorial(number: number): number {
	if (number == 1) return 1;
	else return number * factorial(number - 1);
}

console.log(factorial(3));
