/**
 * Class HashTable
 * @param {Object} obj
 */
const HashTable = function (obj) {
  let length = 0;
  this._items = (function (obj) {
    let items = {};
    for (let p in obj) {
      items[p] = obj[p];
      length++;
    }
    return items;
  })(obj);

  /**
   * Associates the specified value to the specified key
   * @param {string} key The key to which associate the value
   * @param {string} value THe value to associate to the key
   * @returns {(undefined|Object)}
   */
  this.set = function (key, value) {
    let previous = undefined;

    if (this.has(key)) {
      previous = this._items[key];
    } else {
      length++;
    }

    this._items[key] = value;

    return previous;
  };

  /**
   * Returns the value associated to the specified key
   * @param {string} key The key from which retrieve the value
   * @returns {(undefined|string)} Undefined or associated value
   */
  this.get = function (key) {
    return this._items.hasOwnProperty(key) ? this._items[key] : undefined;
  };

  /**
   * Returns whether the hashtable contains the specific key
   * @param {string} key The key to check
   * @returns {boolean}
   */
  this.has = function (key) {
    return this._items.hasOwnProperty(key);
  };

  /**
   * Removes the specified key with its value
   * @param {string} key The key to remove
   * @returns {(undefined|string)} Undefined if key doesn't exist and
   * string (previous value) - value of deleted item
   */
  this.remove = function (key) {
    if (this.has(key)) {
      let previous = this._items[key];
      length--;
      delete this._items[key];
      return previous;
    } else {
      return undefined;
    }
  };

  /**
   * Returns an array with all the registered keys
   * @returns {Array}
   */
  this.getKeys = function () {
    let keys = [];

    for (let i in this._items) {
      if (this.has(i)) {
        keys.push(i);
      }
    }
    return keys;
  };

  /**
   * Returns an array with all the registered values
   * @returns {Array}
   */
  this.getValues = function () {
    let values = [];

    for (let i in this._items) {
      if (this.has(i)) {
        values.push(this._items[i]);
      }
    }
    return values;
  };

  /**
   * Iterates all entries in the specified iterator callback
   * @param {function callback(key, value)} callback with 2 parameters: key, value
   */
  this.each = function (callback) {
    for (let i in this._items) {
      if (this.has(i)) {
        callback(i, this._items[i]);
      }
    }
  };

  /**
   * Delete all the key-value pairs on the hashmap
   */
  this.clear = function () {
    this._items = {};
    length = 0;
  };

  /**
   * Gets the count of the entries in the hashtable
   */
  Object.defineProperty(this, "length", {
    get: function () {
      return length;
    }
  })

  /**
   * Gets an array of all values in the hashtable
   */
  Object.defineProperty(this, "values", {
    get: function () {
      return this.getValues();
    }
  })
};

const hashtable = new HashTable({ one: 1, two: 2, three: 3, four: 4, five: 5 })

console.log('Original length:', hashtable.length)
console.log('Value of key "one":', hashtable.get('one'))
console.log('Has key "foo":', hashtable.has('foo'))
console.log('Previous value of key "foo":', hashtable.set('foo', 'bar'))
console.log('Length after set:', hashtable.length)
console.log('value of key "foo":', hashtable.get('foo'))
console.log('Value of key "four":', hashtable.get('four'))
console.log('Get keys by using property:', hashtable.getKeys())
hashtable.clear();
console.log('Length after clear:', hashtable.length)