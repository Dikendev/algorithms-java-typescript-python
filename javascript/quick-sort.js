class QuickSort {
  sort(array) {
    if (array.length > 0) {
      this.quickSort(array, 0, array.length - 1);
    }
  }

  quickSort(array, low, high) {
    if (low > high) {
      return;
    }

    let i = low;
    let j = high;
    let threshold = array[low];
    while (i < j) {
      while (i < j && array[j] > threshold) {
        j--;
      }

      if (i < j) {
        array[i++] = array[j];
      }

      while (i < j && array[i] <= threshold) {
        i++;
      }

      if (i < j) {
        array[j--] = array[i];
      }
    }
    array[i] = threshold
    this.quickSort(array, low, i - 1)
    this.quickSort(array, i + 1, high)
  }
}

let scores = [90, 60, 50, 80, 70, 100]
const quickSort = new QuickSort()
quickSort.sort(scores)
console.log(scores)