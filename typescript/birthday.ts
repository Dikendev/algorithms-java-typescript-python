export {};
function birthday(s: number[], d: number, m: number): number {
	// Write your code here
	let counter: number = 0;
	let counts = 0;
	for (let i = 0; i < s.length; i++) {
		let numsToSum: number[] = [];
		console.log("counter", counter);
		if (m > 1) {
			for (let j = 1; j < s.length - 1; j++) {
				numsToSum.push(s[j]);
				console.log(j, "jssssss");

				if (j === m) {
					console.log(j, "j", "m", m);

					const sum = numsToSum.reduce((a, b) => a + b, s[i]);
					console.log(numsToSum, "numsToSum");
					console.log(s[i], "s[i]");
					console.log(s[j], "s[j]");

					console.log(sum, "sum");

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
	console.log("counter", counter);
	return counts;
}
const segment = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const day = 18;
const month = 7;

console.log(birthday(segment, day, month));
