function recursive(array) {
  if (array.length == 0) return 0

  return array[0] + recursive(array.slice(1))
}

const array = [2, 3, 4, 5];
console.log(recursive(array))