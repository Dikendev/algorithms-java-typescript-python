
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partitioning(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)]; // middle element
  leftPointer = left; // left pointer
  rightPointer = right; //  right pointer

  while (leftPointer <= rightPointer) {

    while (items[leftPointer] < pivot) {
      leftPointer++;
    }

    while (items[rightPointer] > pivot) {
      rightPointer--;
    }

    if (leftPointer <= rightPointer) {
      swap(items, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
  }

  return leftPointer;
}

function quickSort(items, left, right) {
  var index;

  if (items.length > 1) {
    index = partitioning(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

var items = [4, 6, 8, 2, 9, 3, 5, 7, 1]

// call the quick sort
var sortedArray = quickSort(items, 0, items.length - 1);

console.log('sortedArray', sortedArray)