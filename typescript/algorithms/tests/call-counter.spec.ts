import { startCounter } from "../start-counter";

describe("createCounter function", () => {
	it("should return a counter correct", () => {
		const counter = startCounter(5);
		counter();
		counter();
		expect(counter).toBeInstanceOf(Function);
		expect(counter()).toBe(7);
	});

	it("should return a counter correct", () => {
		const counter = startCounter(1);
		counter();
		counter();
		expect(counter).toBeInstanceOf(Function);
		expect(counter()).toBe(3);
	});
});
