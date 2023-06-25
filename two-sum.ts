const twoSum = (array: number[], target: number) => {
  let indexes: number[] = [];

  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  
  return indexes;
}

let meu_array: number[] = [1,3,10,11,14];
let target: number = 4;

console.log(twoSum(meu_array, target));