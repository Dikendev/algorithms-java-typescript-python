function recursive(array) {
  if (array.length == 0) return 0

  return array[0] + recursive(array.slice(1))
}

