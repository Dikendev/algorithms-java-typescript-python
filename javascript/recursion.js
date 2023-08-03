/**
 * Displays a countdown from a given number to 0 with a one-second interval.
 * @param {number} count - The starting number for the countdown.
 */
function countDown(count) {
  console.log(count);
  if (count == 0) {
    return;
  }
  setTimeout(() => { countDown(count - 1) }, 1000);
}

/**
 * Calculates the sum of digits of a given number.
 * @param {number} num - The input number.
 * @returns {number} The sum of the digits of the input number.
 */
function digitSum(num) {
  if (num == 0) {
    return num;
  }
  return num % 10 + digitSum(Math.floor(num / 10));
}

var arr = [2, [3, 12, 24], 17, [54, [24, 3], 8]];
var result = [];

/**
 * Flattens a nested array.
 * @param {Array} arr - The input array containing nested arrays.
 * @param {number} i - Index to traverse the input array.
 */
function flattenArray(arr, i) {
  if (i >= arr.length) {
    return;
  }
  if (Array.isArray(arr[i])) {
    flattenArray(arr[i], 0);
  } else {
    result.push(arr[i]);
  }
  flattenArray(arr, i + 1);
}

/**
 * Calculates the factorial of a given number.
 * @param {number} i - The input number.
 * @returns {number} The factorial of the input number.
 */
function factorial(i) {
  if (i > 1) {
    return factorial(i - 1) * i;
  }
  return 1;
}

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The index of the desired Fibonacci number (0-based).
 * @returns {number} The nth Fibonacci number.
 */
function findFib(n) {
  if (n <= 0) {
    return 0;
  } else if (n < 3) {
    return 1;
  }
  return findFib(n - 1) + findFib(n - 2);
}

let arr = [2, 12, 34, 54, 41];

function printArray(arr, i) {
  if (i >= arr.length) {
    return;
  }
  console.log(`Element at index ${i} i ${arr[i]}`);
}
printArray(arr, i + 1);
