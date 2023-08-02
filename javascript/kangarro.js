function kangaroo(x1, v1, x2, v2) {
  const maxIterations = 10000

  if ((x2 > x1 && v2 > v1) || (v1 === v2)) {
    console.log('NO');
    return
  }

  for (let i = 0; i < maxIterations; i++) {
    x1 += v1;
    x2 += v2;

    if (x1 === x2) {
      console.log('YES')
      return;
    }
  }
  return ('NO')
}

kangaroo(0, 8, 5, 3)
