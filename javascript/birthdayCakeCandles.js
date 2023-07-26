function birthdayCakeCandles(candles) {
  let count = 0;
  let high = 0;
  candles.forEach((element) => {
    if (element >= high) {
      high = element;
    }
  });
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === high) {
      count++
    }
  }
  return count
}
const arr = [1, 2, 3, 4, 4]
birthdayCakeCandles(arr)