export {};

function reverse<T>(word: T[]): T[] {
	let stack: T[] = [];

	for (let i = 0; i < word.length; i++) {
		stack.push(word[i]);
	}
	let result: T[] = [];

	while (stack.length > 0) {
		result.push(stack.pop()!);
	}

	return result;
}

const word = Array.from("2 @3232");
console.log(reverse(word).join(""));
