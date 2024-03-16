import { Utils } from "../utils";

describe("Utils", () => {
	it("should swap values", () => {
		const array: number[] = [1, 3, 4, 5, 6, 7];
		const from = 1;
		const to = 3;

		Utils.swapValues(array, from, to);

		expect(array).toEqual([1, 5, 4, 3, 6, 7]);
	});

	it("should swap values in modern way", () => {
		const array: number[] = [1, 3, 4, 5, 6];
		const from = 2;
		const to = 4;

		Utils.modernSwapValues(array, from, to);
		expect(array).toEqual([1, 3, 6, 5, 4]);
	});

	it("should find the lowest index in part of array", () => {
		const array: number[] = [1, 3, 4, 5, 6, 7];
		expect(Utils.minIndex(array, 1, 5)).toBe(1);
	});
});
