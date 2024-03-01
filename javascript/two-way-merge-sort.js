class MergeSort {
  sort(array) {
    let temp = new Array(array.length)
    this.mergeSort(array, temp, 0, array.length - 1)
  }

  mergeSort(array, temp, left, right) {
    if (left < right) {
      let center = parseInt((left + right) / 2)
      this.mergeSort(array, temp, left, center) // left merge sort
      this.mergeSort(array, temp, center + 1, right) // right merge sort
      this.merge(array, temp, left, center + 1, right) // merge two ordered arrays
    }
  }

  merge(array, temp, left, right, rightEndIndex) {
    let leftEndIndex = right - 1 // end subscript on the left
    let tempIndex = left // starting  from the left count
    let elementNumber = rightEndIndex - left + 1;

    while (left <= leftEndIndex && right <= rightEndIndex) {
      if (array[left] <= array[right]) {
        temp[tempIndex++] = array[left++]
      } else {
        temp[tempIndex++] = array[right++]
      }
    }

    while (left <= leftEndIndex) {
      temp[tempIndex++] = array[left++];
    }

    while (right <= rightEndIndex) {
      temp[tempIndex++] = array[right++];
    }

    for (let i = 0; i < elementNumber; i++) {
      array[rightEndIndex] = temp[rightEndIndex];
      rightEndIndex--;
    }
  }
}

let scores = [50, 43, 99, 85, 34, 54, 40, 100, 82];
let mergeSort = new MergeSort()
mergeSort.sort(scores)

for (let number of scores) {
  console.log(number)
}