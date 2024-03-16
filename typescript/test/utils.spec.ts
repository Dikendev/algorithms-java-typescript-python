import { Utils } from "../utils";

describe("Utils", () => {
	it("should swap values", () => {
		const array: number[] = [1, 3, 4, 5, 6, 7];
		const from = 1;
		const to = 3;

		Utils.swapValues(array, from, to);

		expect(array).toEqual([1, 5, 4, 3, 6, 7]);
	});
});
