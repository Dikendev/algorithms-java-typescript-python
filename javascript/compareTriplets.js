/**
 * Compare the index of each array that match validations and return as a new array
 * @param {array} a - array of integers 
 * @param {array} b - array of Integers 
 * @returns {array} array
 */
function compareTriplets(a, b) {
  let final = [];
  let totalPointsA = 0
  let totalPointsB = 0;

  const resultA = [];
  const resultB = [];
  a.forEach((element, index) => {
    resultA.push(element)
    b.forEach((element, index) => {
      if (!resultB[index]) {
        resultB.push(element)
      }
    });
    if (resultA[index] > resultB[index]) {
      totalPointsA++
    }
    if (resultA[index] < resultB[index]) {
      totalPointsB++
    }
    final = [totalPointsA, totalPointsB]
  });

  return final
}
let arrA = [17, 28, 30];
let arrB = [99, 16, 8];
console.log(compareTriplets(arrA, arrB));