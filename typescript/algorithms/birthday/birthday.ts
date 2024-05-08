export {};
function birthday(segment: number[], day: number, month: number): number {
	let counter: number = 0;
	let counts = 0;
	for (let i = 0; i < segment.length; i++) {
		let numsToSum: number[] = [];
		if (month > 1) {
			for (let j = 1; j < segment.length - 1; j++) {
				numsToSum.push(segment[j]);
				if (j === month) {
					const sum = numsToSum.reduce((a, b) => a + b, segment[i]);

					if (sum === day) {
						counts++;
					} else {
						numsToSum = [];
					}
				}
			}
		} else {
			if (segment[0] === day) {
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
