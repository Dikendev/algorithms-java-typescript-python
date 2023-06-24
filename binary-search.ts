function binary_search(array: number[], search: number): any {
  
  let low: number = 0;
  let high: number = (array.length) - 1;

  while (low <= high) {
    let middle: number = Math.round((low + high) / 2);
    let count: number = 0;
    if (array[middle] < search) {
      low = middle + 1
      count++;
    }

    else if (array[middle] > search) {
      high = middle -1;
      count++;
    }

    else {
      return middle
    }   
  }
  return undefined;
}

let array_numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(binary_search(array_numbers, 11))

