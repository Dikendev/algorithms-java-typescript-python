function searchNumber(number, arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if (arr[i] == number) {
      console.log(`the number: ${number} was found at index: ${i}`)
      return true
    }
  }
  console.log(`the number: ${number} don't exist in arr`)
  return false;
}
let arrary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 120, 300];
console.log(searchNumber(120, arrary));
