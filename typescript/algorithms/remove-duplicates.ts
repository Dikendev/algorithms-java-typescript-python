export {};

function removeDuplicates(nums: number[]): number {
	let uniqueNum: number[] = [];
	nums.forEach(() => {
		uniqueNum = [...new Set(nums)];
	});
	if (uniqueNum) nums.unshift(...uniqueNum);
	return uniqueNum.length;
}

let numsArr: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const expectedArr: number[] = [1, 2, 3];
const k = removeDuplicates(numsArr);
console.log(k);

const expectedArrLength = expectedArr.length;
for (let i = 0; i < expectedArrLength; i++) {
	console.log(`${numsArr[i]} == ${expectedArr[i]}`);
}
