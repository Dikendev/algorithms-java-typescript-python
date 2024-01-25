class InsertSort {
  static sort(array) {
    for (let i = 0; i < array.length; i++) {
      const insertElement = array[i]
      let insertPosition = i;
      for (let j = insertPosition - 1; j >= 0; j--) {
        if (insertElement < array[j]) {
          array[j + 1] = array[j]
          insertPosition--
        }
      }
      array[insertPosition] = insertElement
    }
  }
}
const scores = [90, 70, 50, 80, 60, 85];

InsertSort.sort(scores)
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i])
}
