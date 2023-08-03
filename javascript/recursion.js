function countDown(count) {
  console.log(count);
  if (count == 0) {
    return
  }
  setTimeout(() => { countDown(count - 1) }, 1000)
}

countDown(10)