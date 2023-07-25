
/**
 * Print a staircase
 * @param {array} n - The number of rows in the staircase 
 */
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let hashes = '#'.repeat(i);
    console.log(spaces, hashes);
  }
}
staircase(6);
