const getGCD = (n1, n2) => {
  if (n2 == 0) {
    return n1
  }
  return getGCD(n2, n1 % n2)
}

const getLCM = (n1, n2) => {
  if (n1 == 0 || n2 == 0) {
    return 0
  } else {
    const gcd = getGCD(n1, n2)
    return Math.abs(n1 * n2) / gcd
  }
}
