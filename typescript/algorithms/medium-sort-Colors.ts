/* 
* Given array numbers with n objects adjacent ordered.
* 0, 1, 2 respectively
*

Example 1:

Input: nums =  [1, 2, 2, 0, 1, 2]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0,1 or 2

*/
function sortColors (nums: number[]): void {
	const swap = function (first: number, second: number) {
		let temp: number = nums[first];
		nums[first] = nums[second];
		nums[second] = temp;
	};

	let low: number = 0;
	let mid: number = 0;
	let high: number = nums.length - 1;

	while (mid <= high) {
	switch (nums[mid]) {
			case 0:
				swap(mid, low);
				mid++;
				low++;
			break;

			case 1:
				mid++;
			break;

			case 2:
				swap(mid, high);
				high--;
			break;
		}
	}
  console.log(nums);
};

let array_nums: number[] = [1, 2, 2, 0, 1, 2];
sortColors(array_nums);
