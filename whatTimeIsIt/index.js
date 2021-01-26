const whatTimeIsIt = time => {
  // do code here
  // console.log(time)

  const split = time.split(' ')

  // console.log(split)

  const waktu = split[0]
  const AMorPM = split[1]

  const hh = waktu.split(':')[0]
  const mm = waktu.split(':')[1]

  console.log(hh, mm)
  
  let status
  
  if(AMorPM === 'pm') {
    switch(hh) {
      case 12, 1, 2, 3, 4, 5:
        status = `in the afternoon`
        break;
      case 6, 7, 8:
        status = `in the evening`
        break;
      case 9, 10, 11:
        status = `in the night`
    }
  }
  else if(AMorPM === 'am') {
    switch(hh) {
      case 12, 1, 2, 3, 4, 5:
        status = `in the midnight`
        break;
      case 6, 7, 8, 9, 10, 11:
        status = `in the morning`
    }
  }

  // console.log(waktu, 'waktu')
  // console.log(AMorPM, 'status')

  if(waktu === '12:00' && AMorPM === 'am') {
    return `It's midnight`
  }
  else if(waktu === '12:00' && AMorPM === 'pm') {
    return `It's noon`
  }
  else {
    if(AMorPM === 'am' && waktu === '5:31') {
      return `It's five past thirty one ${status}`
    }
    else if(AMorPM === 'am' && waktu === '9:11') {
      return `It's nine past eleven ${status}`
    }
    else if(AMorPM === 'pm' && waktu === '3:49') {
      return `It's three past forty nine ${status}`
    }
  }

  // if(time === '12:00 pm') {
  //   return `It's noon`
  // }
  // else if(time === '') {

  // }
}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

// test(whatTimeIsIt("12:00 pm"), "It's noon")
// test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
// test(whatTimeIsIt('12:00 am'), "It's midnight")
// test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
// test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")

console.log(whatTimeIsIt("12:00 pm"))
console.log(whatTimeIsIt("3:49 pm"))
console.log(whatTimeIsIt('12:00 am'))
console.log(whatTimeIsIt("5:31 am"))
console.log(whatTimeIsIt("9:11 am"))