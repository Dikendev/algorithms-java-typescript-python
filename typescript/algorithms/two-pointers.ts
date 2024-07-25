export function ifExist(word: string, wordExist: string): number {
	let wordCopy = word.split("");
	const existInFirstWord = wordExist.split("").every((value: string, index) => {
		if (wordCopy.includes(value)) {
			wordCopy = wordCopy.slice(index, wordCopy.length);
			return true;
		}
		return false;
	});

	return existInFirstWord ? 1 : -1;
}
