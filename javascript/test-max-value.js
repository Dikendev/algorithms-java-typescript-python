/**
 * Return the max value from numbers array
 * @param {Array} arr - Array of numbers unordered
 * @returns {number} the max value of array using temp variable.
 */
const maxValue = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  let maxValue = arr[arr.length - 1];
  return maxValue
}
let scores = [60, 100, 50, 95, 80, 70]
console.log(maxValue(scores))