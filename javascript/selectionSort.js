/**
 *  * Running time = O(n^2)
 * Ω(n^2) in best case
*/
const arrayOfNumbers = [-5, 7, 3, 1, 4, 6, 7, 1, 0];

const selectionSort = array => {
  const len = array.length;
  const swap = (array, index1, index2) =>
    [array[index1], array[index2]] = [array[index2], array[index1]]

  for (let i = 0; i < len; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[smallestIndex]) smallestIndex = j
    }
    if (smallestIndex !== i) {
      swap(array, smallestIndex, i)
    }
  }
  return array
}

selectionSort(arrayOfNumbers)
console.log(arrayOfNumbers)