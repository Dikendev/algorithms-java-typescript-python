export function sumArray(array: number[]) {
	let sum = 0;

	array.forEach((element) => {
		sum += element;
	});

	return sum;
}

export function sumArrayRecursive(array: number[]): number {
	return array.reduce((current, accumulated) => (current += accumulated));
}
