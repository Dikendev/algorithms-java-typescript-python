function findMaxConsecutiveOnes(nums: number[]): number[] {
	let counterOfOnes: number = 0;
	let maxCount: number = 0;

	for (let i = 0; i < nums.length; i++) {
		console.log("nums", nums[i]);

		if (nums[i] === 1) {
			counterOfOnes++;
			maxCount = Math.max(maxCount, counterOfOnes);
		} else {
			counterOfOnes = 0;
		}
	}

	return nums;
}

let nums = [1, 1, 0, 1, 1, 1];
findMaxConsecutiveOnes(nums);

/* Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2 */
