function binary_search(array: number[], search: number): number {
  let low: number = 0;
  let high: number = (array.length) - 1;

  while (low <= high) {
    let middle: number = Math.floor((low + high) / 2);

    if (array[middle] == search) {
      return middle ;
    }

    else if (search < array[middle]) {
      high = middle - 1;
    }

    else {
      low = middle + 1;
    }
  }

  return -1;
}

let array_numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
let search: number = 3

let index: number = (binary_search(array_numbers, search))

if (index != -1) {
  console.log('Number found at index', index)
}
else {
  console.log('Number not found at index')
}


