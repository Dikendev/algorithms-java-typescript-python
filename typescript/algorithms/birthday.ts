export {};
function birthday(s: number[], d: number, m: number): number {
	let counter: number = 0;
	let counts = 0;
	for (let i = 0; i < s.length; i++) {
		let numsToSum: number[] = [];
		if (m > 1) {
			for (let j = 1; j < s.length - 1; j++) {
				numsToSum.push(s[j]);
				if (j === m) {
					const sum = numsToSum.reduce((a, b) => a + b, s[i]);

					if (sum === d) {
						counts++;
					} else {
						numsToSum = [];
					}
				}
			}
		} else {
			if (s[0] === d) {
				counts++;
			}
		}
		counter++;
	}
	return counts;
}
const segment = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const day = 18;
const month = 7;
