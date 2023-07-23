/**
 * Running time = O(n)
 * Ω(1) in best case
 * Find a number in the array of numbers unsorted
 * @param {number} number The number target to be found 
 * @param {array} arr The array of numbers unsorted
 * @returns {boolean}
 */
function searchNumber(number, arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if (arr[i] === number) {
      console.log(`the number: ${number} was found at index: ${i}`)
      return true
    }
  }
  console.log(`the number: ${number} don't exist in arr`)
  return false;
}
let arrayOfNumbers = [9, 2, 9, 4, 5, 6, 1, 8, 7, 19, 120, 300];
console.log(searchNumber(120, arrayOfNumbers));
