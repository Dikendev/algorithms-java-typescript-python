/**
 * Running time = O(nˆ2)
 * O(n) best case
 * Ω(nˆ2) worst case
 * O(1) Space Complexity
 * Sort numbers array unsorted  to sorted using insertion alg
 * @param {array} array of numbers unsorted 
 * @returns {array} array of numbers sorted
 */
const insertionSort = array => {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }
  return array;
}

let arrayOfNumbers = [
  44, 12, 11, 58, 75, 31, 38,
  51, 40, 5, 8, 72, 36, 29,
  9, 66, 54, 8, 81, 28
]
console.log(insertionSort(arrayOfNumbers))