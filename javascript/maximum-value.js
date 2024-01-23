const max = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i]
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }

  const maxValue = array[array.length - 1]

  return maxValue
}

let arr = [60, 50, 95, 80, 70, 200]
console.log(max(arr))