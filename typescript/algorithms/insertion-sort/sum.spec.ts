import { sumArray } from "./sum-array";

describe("Sum", () => {
	it("should return the sum of two numbers", () => {
		const numbers = [1, 5, 5, 5, 5, 4];
		const expected = 25;
		const result = sumArray(numbers);
		expect(result).toBe(expected);
	});

	it("should return 0 when the array is empty", () => {
		const numbers: number[] = [];
		const expected = 0;
		const result = sumArray(numbers);
		expect(result).toBe(expected);
	});

	it("should return the sum of the array", () => {
		const numbers = [1, 2, 3, 4, 5];
		const expected = 15;
		const result = sumArray(numbers);
		expect(result).toBe(expected);
	});
});
