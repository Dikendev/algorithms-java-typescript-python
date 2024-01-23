const arr = [4, 3, 40, 5, 0, 7, 8, 4];

function minimumValue(arr) {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minValue < arr[i]) {
      continue
    } else {
      minValue = arr[i];
    }
  }
  return minValue;
}

console.log(minimumValue(arr))