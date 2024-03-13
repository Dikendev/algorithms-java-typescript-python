function sortedSquares(nums: number[]): number[] {
	let newArr: number[] = [];
	for (let num of nums) {
		newArr.push(num * num);
	}
	return newArr.sort((a, b) => a - b);
}

let numsArr = [-4, -1, 0, 3, 10];

console.log(sortedSquares(numsArr));
