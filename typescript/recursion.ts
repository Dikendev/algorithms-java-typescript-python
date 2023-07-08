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

// console.log(factorial(3));
function sum(arr: any) {
	let total: any = 0;

	for (index = 0; index < arr.length; index++) {
		console.log(total);
		console.log(`arr`, arr);
		total = total + arr[index];
	}
	return total;
}
// console.log(sum(array));

function recursionSum(arr: any) {
	let total: any = 0;
	let length: any = arr.length;

	//base case
	if (index == length) return;
	else {
		for (index = 0; index < length; index++) {
			total = total + arr[index];
		}
	}
}
let array = [2, 4, 6];

console.log(recursionSum(array));
