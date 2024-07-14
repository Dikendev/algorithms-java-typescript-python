export {};

function containsDuplicate(numbers: number[]): boolean {
	return new Set(numbers).size !== numbers.length;
}

export { containsDuplicate };
