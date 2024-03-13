/**
* GET INDEX OF NUMBER WHERE TWO NUMBER FOR ARRAY EQUAL GOAL
* @param totalNumber {number[]} totalNumber {Number[]}
* @param target {number} target Number
* @returns {number[]} Result

arr = [2,3,5,6,7,8,9,10]
b(o)2
result = 8.

*/

const twoSum = (
	totalNumber: number[],
	target: number
): number[] | undefined => {
	let previousValues: any = [];

	for (let index = 0; index < totalNumber.length; index++) {
		let currentNumber: number = totalNumber[index];
		let neededValue: number = target - currentNumber;
		let index2 = previousValues[neededValue];

		if (index2 != undefined) {
			return [index2, index];
		} else {
			previousValues[currentNumber] = index;
		}
	}
};

const array_numbers: any[] = [2, 7, 11, 15];
const target_numbers: number = 9;

console.log(twoSum(array_numbers, target_numbers));
