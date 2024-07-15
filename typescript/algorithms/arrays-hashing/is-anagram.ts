export {};

/**
 * Time complexity O(n + m))
 * Space complexity O(n + m))
 */
export const isAnagram = (firstWord: string, secondWord: string): boolean => {
	const fistWordNormalized = firstWord.toLowerCase();
	const secondWordNormalized = secondWord.toLowerCase();

	if (fistWordNormalized.length !== secondWordNormalized.length) {
		return false;
	}

	const charCounts = new Map<string, number>();

	for (const char of fistWordNormalized) {
		charCounts.set(char, (charCounts.get(char) || 0) + 1);
	}

	for (const char of secondWordNormalized) {
		if (!charCounts.has(char)) return false;

		charCounts.set(char, charCounts.get(char)! - 1);

		if (charCounts.get(char) === 0) {
			charCounts.delete(char);
		}
	}
	return charCounts.size === 0;
};
