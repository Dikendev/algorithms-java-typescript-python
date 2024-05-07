export {};

export function exponentiation(base: number, exponent: number): number {
	let x = base;
	let y = exponent;
	let result = 1;

	while (y != 0) {
		if (y % 2 === 0) {
			x = x * x;
			y = y / 2;
		} else {
			result = result * x;
			y--;
		}
	}

	return result;
}
