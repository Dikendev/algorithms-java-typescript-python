function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  let minSum = arr.slice(0, 4).reduce((acc, value) => acc + value, 0);
  let maxSum = arr.slice(-4).reduce((acc, value) => acc + value, 0);
  console.log(minSum, maxSum)
}

const arr = [1, 2, 3, 4, 5]
miniMaxSum(arr)