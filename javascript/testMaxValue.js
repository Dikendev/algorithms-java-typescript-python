/**
 * Return the max number of numbers array using modern swap
 * @param {Array} arr - Array of numbers unordered
 * @returns {number} the max number in array using temp variable.
 */
const testMaxValue = arr => {
  //if the function have only 1 parameter, i can pass without '()' for simplicity, and be more easy to read
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      //modern swap
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  const maxValue = arr[arr.length - 1];
  console.log(maxValue)
  return maxValue
}

let arr = [60, 110, 70, 95, 80, 70]
testMaxValue(arr)