function gradingStudents(grades) {
  let div = 0
  return grades.map(grade => {
    div = grade % 5

    if (grade >= 38 && div >= 3) return grade + 5 - div

    return grade
  })
}
let arr = [73, 67, 38, 33]

// let arr = [84, 29, 57]
console.log(gradingStudents(arr))

