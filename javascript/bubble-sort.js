function bubbleSort(originalArr) {
  const arr = [...originalArr]
  let counter = 0
  let swapped = false;
  const swap = (arr, index1, index2) =>
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      counter++
      if (arr[i] > arr[j]) {
        swap(arr, j, i)
        swapped = true
      }
    }
  }
  console.log('counter', counter)

  return arr
}
const arr = [10, 9, 1, 4, 2, 3]
console.log(bubbleSort(arr))
console.log(arr)