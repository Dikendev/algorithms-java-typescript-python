/**
 * time O(n)
 * space O(n)
 * using hashSet
 * @param {array} arr - array of numbers
 * @returns {boolean}
 */
function containsDuplicate(arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    else set.add(arr[i], true)
  }
  return false;
}

let arr = [2, 3, 4, 5, 6, 2]
console.log(containsDuplicate(arr))