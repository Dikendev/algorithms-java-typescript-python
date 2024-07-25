/**
 * Check if the second word exist in the first one, if yes return 1 otherwise return -1
 * Solution O(1)
 * @returns
 */
export function ifExist(word: string, wordExist: string): number {
	let i = 0;
	let j = 0;
	while (i < word.length && j < wordExist.length) {
		if (word[i].includes(wordExist[j])) {
			j++;
		}
		i++;
	}
	return j === wordExist.length ? 1 : -1;
}
