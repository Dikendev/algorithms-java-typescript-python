const arr = [60, 50, 95, 80, 70];

class BubbleSort {
  static sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const flag = arr[j]
          arr[j] = arr[j + 1];
          arr[j + 1] = flag
        }
      }
    }
  }
}

BubbleSort.sort(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + ",")
}