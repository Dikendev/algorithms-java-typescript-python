function selectionSort(arr) {

  const minIndex = arr[0]

  for (let i = 0; i < arr.length; i++) {
    console.log('n', arr[i])
    for (let j = i + 1; j < arr.length; j++) {
      console.log('j', arr[j])

      if (minIndex > j) {
        minIndex = arr[j]
      }

    }
  }
  //
}

const array = [60, 80, 95, 50, 70]
selectionSort(array)
// check if the first element is less then the j if yes j++ else 
// minIndex = arr[j] j++
// if(arr[i] != )
