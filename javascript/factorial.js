const factorial = n => {
  if (n == 1) {
    return 1;
  } else {
    return factorial(n - 1) * n
  }
}
let n = 150
let result = factorial(n)
console.log(`the factorial of 5 is ${result}`)