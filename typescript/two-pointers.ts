const a = "asbcd";
const b = "abd";

// verify if b exist in a.
function ifExist(a: string, b: string): string {
	for (let charA of a) {
		console.log(charA);

		for (let charB of b) {
			console.log(charB);
		}
	}

	return "2";
}

const test2 = ifExist(a, b);

console.log(test2);
