export {};
function removeElement(nums: number[], vol: number): number {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== vol) nums[counter++] = nums[i];
	}
	return counter;
}
let nums = [3, 2, 2, 3];
const val = 3;
const k = removeElement(nums, val);
