function countApplesAndOranges(s, t, a, b, apples, oranges,) {
  let counterApple = 0;
  let counterOrange = 0;

  for (const apple of apples) {
    if ((apple + a) >= s && (apple + a) <= t) {
      counterApple++
    }
  }

  for (const orange of oranges) {
    if ((orange + b) >= s && (orange + b) <= t) {
      counterOrange++
    }

  }
  console.log(counterApple)
  console.log(counterOrange)
}

let apples = [2, 3, -4]
let oranges = [3, -2, -4]

countApplesAndOranges(7, 10, 4, 12, apples, oranges)