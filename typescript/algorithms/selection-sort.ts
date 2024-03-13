function findSmallest<T>(numberList: T[]): number {
  let smallestIndex: number = 0;
  let smallest: T = numberList[smallestIndex];

  for (let index = 1; index < numberList.length; index++) {
    if (numberList[index] < smallest) {
      smallest = numberList[index];
      smallestIndex = index;
    }
  }

  return smallestIndex;
}

function selectionSort<T>(arrayToSort: T[]): T[] {
  const sortedArray: T[] = [];
  const length = arrayToSort.length;

  for (let index = 0; index < length; index++) {
    const smallestIndex: number = findSmallest(arrayToSort);
    sortedArray.push(arrayToSort.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

let unsorted_array: number[] = [9, 8, 5, 4, 2,]
console.log(selectionSort(unsorted_array))
