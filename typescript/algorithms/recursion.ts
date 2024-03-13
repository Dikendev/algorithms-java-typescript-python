/**
 * Countdown
 * @param i {number} i Number
 */

function countdown(i: number): void {
	if (i <= 0) return;
	countdown(--i);
}

// Countdown(5);

function factorial(number: number): number {
	if (number == 1) return 1;
	else return number * factorial(number - 1);
}

function sum(arr: any) {
	let total: any = 0;

	for (let index = 0; index < arr.length; index++) {
		console.log(total);
		total = total + arr[index];
	}
	return total;
}

//using loops
function recursionSum(arr: number[]): number {
	let total: number = 0;
	let length: number = arr.length;

	//base case
	for (let index = 0; index < length; index++) {
		total = total + arr[index];

		if (index == length) return total;
		else {
		}
	}
	return recursionSum(arr);
}
let array: number[] = [2, 4, 6, 3];

console.log(recursionSum(array));
