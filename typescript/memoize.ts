export {};

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
	const mem: Record<string, any> = {};
	return (...args) => {
		const key = args.join("-");
		return key in mem ? mem[key] : (mem[key] = fn(...args));
	};
}

const func = (n: number, b: number) => n + b;
const fib = (n: number): number => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n: number): number => (n <= 1 ? 1 : factorial(n - 1) * n);
const empty: number[] = [];
const memoizedFn = memoize(fib);
memoizedFn(5);
memoizedFn(empty);

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
