function countDown(number) {

  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber)
  }
}

countDown(4)