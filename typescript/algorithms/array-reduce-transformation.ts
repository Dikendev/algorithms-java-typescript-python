export {};

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
	if (nums.length === 0) {
		return init;
	} else {
		for (let i = 0; i < nums.length; i++) {
			init = fn(init, nums[i]);
		}
	}
	return init;
}

let array = [1, 2, 3, 4];
let arrayEmpty: [] = [];
const fn: Fn = (accum, curr) => accum + curr;
const fn2: Fn = (accum, curr) => accum + curr * curr;
const fn3: Fn = (accum, curr) => 0;
reduce(arrayEmpty, fn, 100);
