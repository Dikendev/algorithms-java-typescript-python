const insertionSort = (arr) => {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key;
  }
}

const array = [12, 11, 13, 5, 6];
insertionSort(array)
console.log('arr', array)