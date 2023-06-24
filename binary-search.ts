function binary_search(array: number[], search: number): any {
  let low: number = 0;
  let high: number = (array.length) - 1;

  while (low != high) {
    let middle: number = Math.ceil((low + high) / 2);

    if (array[middle] > search) {
      high = middle -1;
    }

    else {
      low = middle;
    }
  }

  if (array[low] = search) {
    return low;
  }
  
  return undefined;
}

let array_numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(binary_search(array_numbers, 9))

