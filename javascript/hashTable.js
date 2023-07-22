
/**
 * Class HashTable
 * @param {Object} obj 
 */
const HashTable = function (obj) {
  let length = 0;
  this.items = (function (obj) {
    let items = {};
    for (let p in obj) {
      item[p] = obj[p];
      length++
    }
    return items;
  })(obj)
}