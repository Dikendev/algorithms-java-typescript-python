function twoSum(nums: number[], target: number): number[] | undefined {
	const values = new Map();
	for (let i = 0; i < nums.length; i++) {
		const currentValue = nums[i];
		const missingValue = target - currentValue;
		if (values.has(missingValue)) return [values.get(missingValue), i];
		values.set(currentValue, i);
	}
}
const array = [3, 2, 3, 9];
console.log(twoSum(array, 12));
