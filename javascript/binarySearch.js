/**
 * Running time = O(log n)
 * Ω(1) in best case
 * Binary Search in a array of numbers ordered
 * @param {number} search number in array 
 * @param {Array} array of numbers ordered 
 * @returns {number} index in array where number was found
 */
function binarySearch(search, arr) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let guess = arr[middle]
    if (guess === search) {
      return middle
    } else if (guess < search) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return -1
}

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const index = binarySearch(13, arr);

if (index != -1) {
  console.log(`Number found at index %d`, index)
} else {
  console.log(`Number not found at index`)
}