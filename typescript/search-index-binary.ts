export {};

function searchInsert(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) return mid;
		nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
	}
	return 1;
}
let nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 8));
