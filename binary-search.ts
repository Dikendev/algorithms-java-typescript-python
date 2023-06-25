/*
 * GET INDEX OF NUMBER
 * @param array - array of numbers;
 * @param targetNumber - number
 * @returns number
 * 
 *  Big O notations
 * O(log n)
*/

function binary_search(array: number[], targetNumber: number): number {
	let low: number = 0;
	let high: number = array.length - 1;
	let count: number = 0;

	while (low <= high) {
		let middle: number = Math.floor((low + high) / 2);

		if (array[middle] == targetNumber) {
			console.log("steps to find: ", count);
			return middle;
		} else if (targetNumber < array[middle]) {
			//count to find how much search
			count++;
			high = middle - 1;
		} else {
			count++;
			low = middle + 1;
		}
	}

	return -1;
}

let array_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search: number = 3;

let index: number = binary_search(array_numbers, search);

if (index != -1) {
	console.log("Number found at index", index);
} else {
	console.log("Number not found at index");
}

/*
 * Find maximum steps to find a number.
 *
*/

const searchNumber: number = 256;
const numberArray: number[] = [];

for (let i = 1; i <= 256; i++) {
	numberArray.push(i);
}

let index2: number = binary_search(numberArray, searchNumber);

if (index2 != -1) {
	console.log("Number found at index", index2);
} else {
	console.log("Number not found at index");
}
