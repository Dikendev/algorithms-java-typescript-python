
function binarySearch(arr, searchValue) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0

  while (low <= high) {
    mid = (low + high) / 2;

    if (arr[mid] == searchValue) {
      return mid;
    } else if (arr[mid] < searchValue) {
      low = mid + 1
    } else if (arr[mid] > searchValue) {
      high = mid - 1
    }
  }
  return -1
}

const array = [30, 40, 50, 70, 85, 90, 100];
const search = 50
const result = binarySearch(array, search)

if (result != -1) {
  console.log(`found at index, ${array[result]} ${result}`)
} else {
  console.log('not found')
}