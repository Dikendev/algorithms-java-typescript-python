/**
 * 
 * 
 * 
 */

function sumRecursive(arr) {
  if (arr.length == 0) return 0;

  return arr[0] + sumRecursive(arr.slice(1));
}
let arrayNumbers = [1, 2, 3, 4, 5];
console.log(sumRecursive(arrayNumbers));