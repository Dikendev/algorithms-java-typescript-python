function plusOne(digits: number[]): number[] {
	return Array.from(
		String(digits.reduce((accum, digit) => accum * 10 + digit, 0) + 1),
		Number
	);
}

const teste: number[] = [
	6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
];

const digits = [1, 2, 3];
console.log(plusOne(teste));
const textint = teste.toString().split(",").join("");
const slite = textint.slice(teste.length / 2, teste.length);

console.log("slite", Number(slite) + 1);

let number: number[] = [10];

// desire result 1,0,0
