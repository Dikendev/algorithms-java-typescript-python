export {};

function searchInsert(nums: number[], target: number): number {
	for (let i = 0; i < nums.length; i++) {
		console.log(nums[i], "target", target);
		if (target == nums[i]) {
			return i;
		}
	}
	return 1;
}

let nums = [1, 3, 5, 6];

console.log(searchInsert(nums, 10));
