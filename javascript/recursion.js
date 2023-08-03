function countDown(count) {
  console.log(count);
  if (count == 0) {
    return;
  }
  setTimeout(() => { countDown(count - 1) }, 1000);
}

let number = 3476;

function digitSum(num) {
  if (num == 0) {
    return num;
  }
  return num % 10 + digitSum(Math.floor(num / 10));
}

var arr = [2, [3, 12, 24], 17, [54, [24, 3], 8]];
var result = [];

function flattenArray(arr, i) {
  if (i >= arr.length) {
    return
  }
  if (Array.isArray(arr[i])) {
    flattenArray(arr[i], 0);
  } else {
    result.push(arr[i])
  }
  flattenArray(arr, i + 1)
}

flattenArray(arr, 0)
console.log(result)