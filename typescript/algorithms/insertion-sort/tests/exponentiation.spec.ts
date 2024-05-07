import { exponentiation } from "../exponentiation";

describe("Exponentiation", () => {
	it("should return 1 when exponent is 0", () => {
		const base = 2;
		const exponent = 0;
		const expected = 1;
		const result = exponentiation(base, exponent);
		expect(result).toBe(expected);
	});

	it("should return the base when the exponent is 1", () => {
		const base = 3;
		const exponent = 1;
		const expected = 3;
		const result = exponentiation(base, exponent);
		expect(result).toBe(expected);
	});

	it("should return the base raised to the exponent", () => {
		const base = 4;
		const exponent = 3;
		const expected = 64;
		const result = exponentiation(base, exponent);
		expect(result).toBe(expected);
	});
});
