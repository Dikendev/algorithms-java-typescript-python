/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
	console.log("arr", arr);

	for (let i = 0; i < arr.length; i++) {
		console.log("each", arr[i]);

		if (arr[i] === 0) {
			for (let j = arr.length - 1; j > i; j--) {
				arr[j] = arr[j - 1];
			}
			i++;
		}
	}
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];

duplicateZeros(arr);
console.log(arr);
