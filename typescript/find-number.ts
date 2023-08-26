function findNumbers(nums: number[]): number {
	let count: number = 0;
	for (let i = 0; i < nums.length; i++) {
		count += nums[i].toString().length % 2 === 0 ? 1 : 0;
	}
	return count;
}

let arr: number[] = [12, 230, 6333];
findNumbers(arr);
