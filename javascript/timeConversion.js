function timeConversion(s) {
  let time = s.slice(0, 2)
  let min = s.slice(-7, -5)
  let sec = s.slice(-4, -2)
  let check = s.slice(-2)
  let newTime = ''

  if (check === 'PM') {
    if (time >= '01' && time <= '11') {
      newTime = (+time + 12).toString()
    } else {
      newTime = time
    }
  } else {
    if (time >= '12') {
      newTime = (time - '12')
      if (newTime < 10) {
        newTime = `0${newTime}`
      }
    }
    else {
      newTime = time;
    }
  }
  return `${newTime}:${min}:${sec}`
}
let time = '04:59:59AM'
timeConversion(time);
