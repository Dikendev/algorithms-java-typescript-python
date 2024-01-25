function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
}

const array = [50, 60, 70, 80, 90]
reverse(array)
console.log(array)