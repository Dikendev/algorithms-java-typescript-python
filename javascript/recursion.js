function countDown(count) {
  console.log(count);
  if (count == 0) {
    return
  }
  setTimeout(() => { countDown(count - 1) }, 1000)
}

let number = 3476;

function digitSum(num) {
  if (num == 0) {
    return num
  }
  return num % 10 + digitSum(Math.floor(num / 10))
}

