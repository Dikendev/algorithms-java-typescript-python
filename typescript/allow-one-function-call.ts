type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
	let count = 0;
	return function (...args) {
		if (count != 0) return undefined;
		count++;
		return fn(...args);
	};
}
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

const fn = (a: number, b: number, c: number): number => a + b + c;
let onceFn: Fn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
