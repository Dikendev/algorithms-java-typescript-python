export {};

/**
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
