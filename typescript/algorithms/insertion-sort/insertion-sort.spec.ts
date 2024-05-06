import { insertionSort } from "./insertion-sort-invariants";

describe("Insertion Sort", () => {
	it("should sort an array with unique numbers", () => {
		const numbers = [5, 4, 2, 7, 8, 1, 3, 6];

		insertionSort(numbers, numbers.length);

		const expected = [1, 2, 3, 4, 5, 6, 7, 8];
		expect(numbers).toEqual(expected);
	});
});
