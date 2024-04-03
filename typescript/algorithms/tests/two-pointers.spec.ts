import { ifExist } from "../two-pointers";

describe("Two Pointers function", () => {
	it("should return a 1 when search word exist in first word", () => {
		const wordOne = "asbcd";
		const wordExist = "abd";
		const exist = ifExist(wordOne, wordExist);
		expect(exist).toBe(1);
	});

	it("should return a -1 when search word do not exist in first word", () => {
		const wordOne = "asbcd";
		const wordExist = "abde";
		const exist = ifExist(wordOne, wordExist);
		expect(exist).toBe(-1);
	});

	it("should what", () => {
		const wordOne = "a";
		const wordExist = "aaaa";
		const exist = ifExist(wordOne, wordExist);
		expect(exist).toBe(-1);
	});
});
