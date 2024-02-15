const factorial = (x) => x === 0 ? 1 : x * factorial(x - 1)

const num = 3

if (num > 0) {
  let result = factorial(num)
  console.log(`The factorial of ${num} is ${result}`)
}