export {};

/**
 * The `isGood` function takes an array of numbers as input and performs some operations on it.
 * It keeps track of the highest number encountered so far using a `higher` object.
 * The function then iterates through each number in the input array and checks if it is already present in the `higher` object.
 * If it is, the function compares the current number with the value stored in the `higher` object.
 * If the current number is greater, it updates the value in the `higher` object.
 * If the current number is smaller, it logs a message indicating that the current number is smaller.
 * If the number is not present in the `higher` object, it adds it with the current number as the value.
 * Finally, the function logs the `higher` object after all iterations are completed.
 *
 * @param nums - An array of numbers
 */
function isGood(nums: number[]): Record<number, number> | undefined {
	let higher: Record<number, number> = {};

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];

		if (currentNumber in higher) {
			if (higher[currentNumber] < currentNumber) {
				higher[currentNumber] = currentNumber;
			} else {
				higher[currentNumber];
			}
		} else {
			higher[currentNumber] = currentNumber;
		}

		return higher;
	}
}

const base3 = [1, 3, 3, 5, 8, 2];
isGood(base3);
