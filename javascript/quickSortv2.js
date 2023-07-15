const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftSubArr = [];
  let rightSubArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftSubArr.push(array[i]);
    } else {
      rightSubArr.push(array[i]);
    }
  }

  return [...quickSort(leftSubArr), pivot, ...quickSort(rightSubArr)]
}

let numbersArray = [2, 5, 7, 4, 9, 1];
console.log(quickSort(numbersArray))