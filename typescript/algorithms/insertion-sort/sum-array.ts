export function sumArray(array: number[]) {
	let sum = 0;

	array.forEach((element) => {
		sum += element;
	});

	return sum;
}
