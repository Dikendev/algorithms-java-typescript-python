export {};

//loop invariants
export function insertionSort(numbers: number[], n: number) {
	for (let i = 1; i < n; i++) {
		const key = numbers[i];
		let j = i - 1;

		while (j >= 0 && numbers[j] > key) {
			numbers[j + 1] = numbers[j];
			j--;
		}
		numbers[j + 1] = key;
	}
}
