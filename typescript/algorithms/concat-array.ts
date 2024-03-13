export {};

type ConcatenateArrayFunction = (nums: number[]) => number[];

const getConcatenation: ConcatenateArrayFunction = (nums) => nums.concat(nums);

const nums: number[] = [1, 3, 2, 1];
console.log(getConcatenation(nums));
