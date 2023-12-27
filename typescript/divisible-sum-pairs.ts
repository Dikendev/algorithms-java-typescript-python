export {};
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 *
 * O(n2)
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
	let resultCounter: number = 0;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			const sum = ar[i] + ar[j];
			if (sum % k === 0) resultCounter++;
		}
	}
	return resultCounter;
}

const array: number[] = [1, 3, 2, 6, 1, 2];
const k = 3;
const n = array.length;

divisibleSumPairs(n, k, array);
