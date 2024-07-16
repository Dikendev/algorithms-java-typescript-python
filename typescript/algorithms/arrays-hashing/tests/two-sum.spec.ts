import { twoSum } from "../two-sum";

describe("twoSum", () => {
	it("should return the indices of numbers of first case", () => {
		const numbers = [3, 4, 5, 6];
		const target = 7;
		const output = [0, 1];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});

	it("Should return the indices of second case", () => {
		const numbers = [4, 5, 6];
		const target = 10;
		const output = [0, 2];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});

	it("Should return the indices of third case", () => {
		const numbers = [5, 5];
		const target = 10;
		const output = [0, 1];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});
});
