import { CompressData } from "../compress-array";
import { approvedStatus } from "../data-mock";

describe("compressArray", () => {
	it("should compress the array and return a map with the compressed data", () => {
		const arrayData = approvedStatus;
		const result = CompressData.compressArrayToMap(arrayData);
		expect(result).toBeDefined();
		expect(result.size).toBeGreaterThan(0);
		expect(result.size).toBeLessThan(arrayData.length);
		expect(result.get("approved_1")).toBe(30);
		expect(result.get("approved_2")).toBe(5);
	});

	it("should return a array from a map", () => {
		const mapData = new Map<string, number>();

		((mapData: Map<string, number>) => {
			mapData
				.set("approved_1", 30)
				.set("failed_1", 10)
				.set("approved_2", 5)
				.set("failed_2", 2)
				.set("conditionalApproved_1", 3);
		})(mapData);

		const expectedSizeArray = 50;

		const result = CompressData.generateArrayFromMap(mapData);
		expect(result).toBeDefined();
		expect(result).toBeInstanceOf(Array);
		expect(result.length).toBe(expectedSizeArray);
	});
});
