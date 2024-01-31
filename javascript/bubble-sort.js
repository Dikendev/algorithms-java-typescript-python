/**
 * Compare each number in array to sort from lower to the highest number in array.
 * @param {array} arr - Array of unordered
 * @returns {Array } arr - Sorted array
 */
const bubbleSort = arr => {
  const swap = (arr, index1, index2) =>
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, j, i)
      }
    }
  }
  return arr
}
const arr = [10, 9, 1, 4, 2, 3]