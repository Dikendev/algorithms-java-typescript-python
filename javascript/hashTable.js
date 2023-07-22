/* internals of hash table
implementations, collisions and hash functions.
*/
const book = {}
book['apple'] = 0.67;
book['milk'] = 2.3;
book['avocado'] = 1.32;

const phoneBook = {};
phoneBook['cristina'] = 9992341;
phoneBook['police'] = 190;

/**
 * Vote check
 * @param {string} name Voter name
 */
const voted = {};
function check_voter(name) {
  if (voted[name]) {
    console.log('get out!')
  } else {
    voted[name] = true;
    console.log('let the vote', name)
  }
}
// check_voter('diego')
// check_voter('diego')
// check_voter('cristina')

const list = {}
function returnOne(input) {
  if (!list[input]) {
    console.log(1)
  }
}
// returnOne('oi')

/**
 * Save the name length as index
 * @param {string} name 
 */
const listName = {};
function nameAsIndex(name) {
  const lengthOfName = name.length;
  if (!listName[name]) {
    listName[lengthOfName] = name
    console.log('saved', listName)
  } else {
    console.log('already saved', listName[name])
  }
}
// nameAsIndex('diego')
console.log('obj final', listName)

const savedByFirstLetter = {}
function saveFistLetter(name) {
  const firstLetter = name[0]
  if (!savedByFirstLetter[name]) {
    savedByFirstLetter[firstLetter] = name
    console.log('saved')
  } else {
    console.log('already saved')
  }
}
// saveFistLetter('cirstina')
// saveFistLetter('curioso')

const books = {};
function BooksByAuthor(author, titles) {
  if (!books[author]) {
    books[author] = titles
  } else {
    console.log('This book already exist in hash')
  }
}
// BooksByAuthor('watchmen', 'cristofer nollon')
// BooksByAuthor('watchmen', 'cristofer nollon')
// console.log(books)
