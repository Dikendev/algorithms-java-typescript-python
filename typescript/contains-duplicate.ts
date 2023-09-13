export {};
function containsDuplicate(nums: number[]): boolean {
	let unique: Record<number, number> = {};
	let isRepeated: boolean = false;
	for (let i = 0; i < nums.length; i++) {
		!unique[nums[i]]
			? (unique[nums[i]] = 1)
			: (unique[nums[i]]++, (isRepeated = true));
	}
	return isRepeated;
}
let numsRepeated = [1, 2, 3, 3, 3, 4, 5, 1, 2, 5];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(containsDuplicate(numsRepeated));
