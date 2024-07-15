import { isAnagram } from "../is-anagram";

describe("isAnagram", () => {
	it("should return true whe words is anagram", () => {
		const word1 = "CaSa";
		const word2 = "aacs";
		const anagram = isAnagram(word1, word2);
		expect(anagram).toBeTruthy();
	});

	it("should return false if the words is not anagram", () => {
		const word1 = "sNaKe";
		const word2 = "cAse";
		const anagram = isAnagram(word1, word2);
		expect(anagram).toBeFalsy();
	});
});
