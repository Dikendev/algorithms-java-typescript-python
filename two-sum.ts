/*  
* GET INDEX OF NUMBER WHERE TWO NUMBER FOR ARRAY EQUAL GOAL
* @param totalNumber - array of numbers;
* @param target - number
* @returns
*/
const twoSum = (totalNumber: number[], target: number): number[] | undefined => {
  let numObj: {} = {};

  for (let index = 0; index < totalNumber.length; index++) {
    let complement = target - totalNumber[index];

    if (numObj[complement] !== undefined) {
      return [numObj[complement], index];
    }
    numObj[totalNumber[index]] = index; 
  }
}

let array_numbers: number[] = [1,3,10,11,14];
let target_numbers: number = 11;

console.log(twoSum(array_numbers, target_numbers));