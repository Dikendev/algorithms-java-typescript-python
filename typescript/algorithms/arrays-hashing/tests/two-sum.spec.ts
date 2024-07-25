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

	it("should return the indices of the fourth case", () => {
		const numbers = [1, 2, 3, 4, 5, 10];
		const target = 9;
		const output = [3, 4];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});

	it("should return a empty array if no sum number is equal to target value", () => {
		const numbers = [1, 2, 3, 4, 5];
		const target = 50;
		const output: number[] = [];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});

	it("should return the sum result using float numbers", () => {
		const numbers = [1.5, 2.5, 5.3];
		const target = 7.8;
		const output = [1, 2];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});

	it("should return the sum using negative numbers ", () => {
		const numbers = [3, -10, -6, 2];
		const target = 16;
		const output = [1, 2];
		const sum = twoSum(numbers, target);
		expect(sum).toEqual(output);
	});
});
