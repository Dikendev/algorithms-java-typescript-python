const minimumValue = arr => {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
}

const arr = [4, 3, 40, 5, 1, 7, 8, 4];
const minimumAnswer = 1;

if (minimumValue(arr) == minimumAnswer) {
  return console.log('correct answer')
} else {
  return console.log('wrong answer')
}
