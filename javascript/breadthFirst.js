/**
 * Running time = O(n)
 * Ω(n) in best case
 * Binary Search in a array of numbers ordered
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const breadFirstValues = (root) => {
  if (root === null) return [];

  const values = []
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val)

    if (current.left === null) queue.push(current.left);
    if (current.right == null) queue.push(current.right);
  }

  return values;
}