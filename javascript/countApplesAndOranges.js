
/**
 * Count the quantity of dropped fruits inside the house range
 * @param {number} s house initial location
 * @param {number} t house final location
 * @param {number} a location apple tree
 * @param {number} b location orange tree
 * @param {array} apples Array number of apples  
 * @param {array} oranges Array number of oranges  
 */
function countApplesAndOranges(s, t, a, b, apples, oranges,) {

  const countInRange = (treePosition, offsets) =>
    offsets.reduce((count, offset) => count + (treePosition + offset >= s && treePosition + offset <= t), 0);

  const appleCount = countInRange(a, apples)
  const orangeCount = countInRange(b, oranges)

}

let apples = [2, 3, -4]
let oranges = [3, -2, -4]

countApplesAndOranges(7, 10, 4, 12, apples, oranges)