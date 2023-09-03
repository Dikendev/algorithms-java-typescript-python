export {};

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
	const newNumber: number[] = [];
	arr.map((element, index) => {
		if (fn(element, index)) newNumber.push(element);
	});
	return newNumber;
}
let arr = [0, 10, 20, 30];
const fn = function greaterThan10(n: number): boolean {
	return n > 10;
};
const fn2 = function firstIndex(n: number, i: number): boolean {
	return i === 0;
};
const fn3 = function plusOne(n: number): number {
	return n + 1;
};
filter(arr, fn2);
