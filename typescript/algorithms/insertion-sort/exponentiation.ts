export {};

function exponentiation(b: number, c: number): number {
	let x = b;
	let y = c;
	let z = 1;

	while (y != 0) {
		if (y % 2 === 0) {
			x = x * x;
			y = y / 2;
		} else {
			z = z * x;
			y--;
		}
	}

	return z;
}

console.log(exponentiation(2, 3));
