export {};

function reverseString<T>(word: string): string {
	let stack: T[] = [];

	for (let i = 0; i < word.length; i++) {}

	let reverseString = "";

	while (stack.length > 0) {
		reverseString += stack.pop;
	}

	return reverseString;
}
