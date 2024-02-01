const shellSort = array => {
  let middle = parseInt(array.length / 2)
  for (let gap = middle; gap > 0; gap = parseInt(gap / 2)) {
    for (let i = gap; i < array.length; i++) {
      let j = i

      while (j - gap >= 0 && array[j] < array[j - gap]) {
        swap(array, j, j - gap);
        j = j - gap;
      }
    }
  }
}

function swap(array, a, b) {
  array[a] = array[a] + array[b]
  array[b] = array[a] - array[b];
  array[a] = array[a] - array[b];
}

let array = [9, 6, 5, 8, 0, 7, 4, 3, 1, 2];

shellSort(array)
console.log(array)