import linearSearch from "../linear-search";

const array = [1, 3, 4, 5];

describe("Linear search", () => {
	it("should return null when value is not found", () => {
		expect(linearSearch(array, 6)).toBeNull();
	});

	it("should return the index when value is found", () => {
		expect(linearSearch(array, 5)).toBe(3);
	});
});
