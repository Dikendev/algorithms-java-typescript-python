/**
 * Count the numbers of elements in the array
 * @param {Array} array Array of numbers
 * @returns {number} The number of elements in the array
 */

function count(array) {
  if (array.length === 0) return 0;

  return 1 + count(array.slice(1));
}

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 8];
console.log(count(arrayOfNumbers));