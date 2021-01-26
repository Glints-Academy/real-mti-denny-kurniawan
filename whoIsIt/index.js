const whoIsit = (firstDay, secondDay) => {
  // do code here
  console.log(firstDay, 'first')
  console.log(secondDay, 'second')

  let result = [] // declare array result as empty

  firstDay.forEach(first => { // looping every value of firstDay array as first
    secondDay.forEach(second => { // looping every value of secondDay array as second
      first === second ? result.push(first) : result 
      // matching the first and second value
      // if true will push to result array
      // if false will do nothing to the result array
      
    })
  })

  console.log(result)

  return result
}

// do not change this code below
const test = (testCase, result) => {
  if (testCase.sort().join() === result.sort().join()) {
    return console.log(true)
  }
  return console.log(false)
}

// whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"])
// whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi'])

test(whoIsit(["Joko", "Ani", "Budi"], ["Joko"]), ['Joko'])
test(whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"]), ["Jokowi", "Prabowo"])
test(whoIsit(["Zoe", 'Pearson', 'Dona', 'Luis'], ["Dona", "Robert", "Forstman", "Katrina"]), ['Dona'])
test(whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi']), [])
test(whoIsit(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'], ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia']), ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'])
