const calculateAvarage = (arr) => {
  let total = arr.reduce((accum, curElm) => accum + curElm, 0)
  console.log(total)

  return total / arr.length
}

console.log(calculateAvarage([2,4,3,2,4,3,2]))