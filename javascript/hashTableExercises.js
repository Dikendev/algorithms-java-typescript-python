const bookText = `It is a truth universally acknowledged, 
that a single man in possession of a good fortune, 
must be in want of a wife.`;
// console.log(bookText)

const wordFrequencyMap = new Map();
const words = bookText.split(/\W+/)
// console.log(words)

for (const word of words) {
  const lowercaseWord = word.toLowerCase()
  const currentCount = wordFrequencyMap.get(lowercaseWord) || 0;
  wordFrequencyMap.set(lowercaseWord, currentCount + 1);
}

// console.log(wordFrequencyMap)
class PhoneBook {
  constructor() {
    this.contacts = new Map();
  }

  addContact(name, phoneNumber) {
    this.contacts.set(name, phoneNumber);
  }

  getPhoneNumber(name) {
    return this.contacts.get(name) || 'Contact not found';
  }

  getAllContacts() {
    return this.contacts;
  }
}

const hitchhikersGuide = new PhoneBook();
hitchhikersGuide.addContact('Arthur Dent', '122-321-324-2132');
hitchhikersGuide.addContact('Ford Prefect', '232-432-534-2333');
hitchhikersGuide.addContact('Trillian', '231-444-643-578-666');

// console.log(hitchhikersGuide.getPhoneNumber('Arthur Dent'))
// console.log(hitchhikersGuide.getPhoneNumber('Zaphod Beeblebrox')); // Output: Contact not found
// console.log(hitchhikersGuide.getAllContacts())

/**
 * Find unique numbers in a array
 * @param {Array} array of numbers
 * @returns {Array} array of unique numbers
 */
function findUniqueElements(array) {
  const uniqueMap = new Map();
  for (const number of array) {
    if (uniqueMap.has(number)) {
      uniqueMap.set(number, false)
    } else {
      uniqueMap.set(number, true)
    }
  }

  const uniqueElements = [];
  for (const [number, isUnique] of uniqueMap) {
    if (isUnique) {
      uniqueElements.push(number);
    }
  }
  return uniqueElements
}
const numbers = [1, 2, 3, 4, 5, 6, 4, 3, 6, 7, 8, 4, 2, 1];
const uniqueNumbers = findUniqueElements(numbers)
console.log(uniqueNumbers)