/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
console.time(`quicksort`)
function quicksort(array) {
  //base case, array with 0 or 1 element are already sorted
  if (array.length < 2) return array;
  // recursive case
  let pivot = array[0];
  console.log(`pivot`, pivot)
  // partitioning the lefts arrays.
  // sub-arrays of all the elements less than the pivot
  let less = array.slice(1).filter(function (element) {
    return element <= pivot;
  })
  console.log(`less`, less)

  //sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter(function (element) {
    return element > pivot;
  })
  console.log(`greater`, greater)

  return quicksort(less).concat([pivot], quicksort(greater));

}
console.timeEnd(`quicksort`)

let numbersArray = [2, 5, 7, 4, 9, 1];
console.log(quicksort(numbersArray));