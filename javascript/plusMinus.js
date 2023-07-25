function plusMinus(arr) {
  let len = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach(element => {
    if (element > 0) {
      positiveCount++
    } else if (element < 0) {
      negativeCount++
    } else {
      zeroCount++
    }
  });

  let positiveRatio = (positiveCount / len).toFixed(6);
  let negativeRatio = (negativeCount / len).toFixed(6);
  let zeroRatio = (zeroCount / len).toFixed(6)
  console.log('positiveRatio', positiveRatio)
  console.log('negativeRatio', negativeRatio)
  console.log('zeroRatio', zeroRatio)
}
let arrayOfNumbers = [1, 1, 0, -1, -1]
plusMinus(arrayOfNumbers)