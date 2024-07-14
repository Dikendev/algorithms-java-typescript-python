import { containsDuplicate } from "../contains-duplicate";

describe("containsDuplicate", () => {
	it("should return true if numbers is duplicate", () => {
		const numbers = [1, 2, 3, 3];
		const duplicate = containsDuplicate(numbers);
		expect(duplicate).toBeTruthy();
	});

	it("should return false if not exist duplicate numbers", () => {
		const numbers = [1, 2, 3, 4];
		const duplicate = containsDuplicate(numbers);
		expect(duplicate).toBeFalsy();
	});
});
