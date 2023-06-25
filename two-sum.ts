/*  
* GET INDEX OF NUMBER WHERE TWO NUMBER FOR ARRAY EQUAL GOAL
* @param array - array of number;
* @param goal - number
* @returns
*/
const twoSum = (array: number[], goal: number) => {
  let memo = {};
  let complement;
  for (let i = 0; i < array.length; i++) {
    complement = goal -array[i];
    memo[array[i]] = complement;

    if(memo[complement]) {
      return [array.indexOf(complement), array.indexOf(array[i])];
    }
  }

  return [];
}

let meu_array: number[] = [1,3,10,11,14];
let target: number = 13;

console.log(twoSum(meu_array, target));