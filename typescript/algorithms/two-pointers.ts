// verify if b exist in a.
export function ifExist(word: string, wordExist: string): number {
	let result = "";
	for (let i = 0; i < wordExist.length; i++) {
		if (wordExist[i] === word[i]) {
			result = result.concat(wordExist[i]);
		}
	}

	if (wordExist.length === 0) {
		return 1;
	}
	return -1;
}
