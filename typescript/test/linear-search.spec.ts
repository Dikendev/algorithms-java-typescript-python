import linearSearch from "../linear-search";

describe("Linear search", () => {
	it("should return null when value is not found", () => {
		expect(linearSearch([1, 3, 4, 5], 6)).toBeNull();
	});
});
