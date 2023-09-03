export {};

type Fn = (n: number, i: number) => boolean | number;

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
	const newNumber: number[] = [];
	arr.map((element, index) => {
		if (fn(element, index)) newNumber.push(element);
	});
	return newNumber;
}
let arr = [0, 10, 20, 30];
const greaterThan10: Fn = (n: number): boolean => n > 10;
const firstIndex: Fn = (n: number, i: number): boolean => i === 0;
const plusOne: Fn = (n: number): number => n + 1;
filter(arr, firstIndex);
