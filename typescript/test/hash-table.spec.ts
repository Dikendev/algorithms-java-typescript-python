import { HashTable } from "../hash-table/hash-table";

describe("HashTable", () => {
	it("should put a key", () => {
		const hashTable = new HashTable<string, number>(
			10,
			(value: string) => value.length
		);

		hashTable.put("one", 1);
		const elements = hashTable.elements();
	});
});
