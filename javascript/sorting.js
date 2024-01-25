function selectionSort(arr) {

  let minIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(minIndex)
    minIndex = i
    let minValue = arr[minIndex]
    for (let j = i; j < arr.length; j++) {
      if (minValue > arr[j + 1]) {
        minValue = arr[j + 1];
        minIndex = j + 1
      }
      if (i != minIndex) {
        let temp = arr[i];
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
      }
    }

    return minValue
  }
  //
}

const array = [60, 80, 95, 50, 70]
console.log(selectionSort(array))
console.log(array)
