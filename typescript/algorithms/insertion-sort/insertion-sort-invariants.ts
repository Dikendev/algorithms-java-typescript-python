export {};

//loop invariants
function insertionSort(numbers: number[], n: number) {
	for (let i = 1; i < n; i++) {
		const key = numbers[i];
		let j = i - 1;

		console.log("j", j);
		console.log("key", key);

		while (j >= 0 && numbers[j] > key) {
			numbers[j + 1] = numbers[j];
			j--;
			numbers[j + 1] = key;
		}
	}

	console.log(numbers);
}

insertionSort([5, 4, 3, 2, 1], 5);
