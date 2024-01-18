export {};

function reverseString<T>(word: string): string {
	let stack: string[] = [];

	for (let i = 0; i < word.length; i++) {
		stack.push(word[i]);
	}
	let reverseString = "";

	while (stack.length > 0) {
		reverseString += stack.pop();
	}
	return reverseString;
}

const word = "abra kadabra";
console.log(reverseString(word));
