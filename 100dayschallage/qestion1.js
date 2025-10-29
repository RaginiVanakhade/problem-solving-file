// Q if the input string is empty or contains only whitespace characters. the function should return false.
// find longest word in the string and retun it 



function practice1(str) {

  if(str.trim().length === 0 ) {
    return false
  }

  const string = str.split(" ")
  const strings = string.sort((a, b) => a.length - b.length)
  console.log(strings)
  return strings.at(-1)
}

console.log(practice2("hello ragini Where are you Now helooooooooo"))
function practice2(str) {
  if(str.trim().length === 0 ) {
    return false
  }

  const string = str.split(" ")
  return string.reduce((accum, curword) => (accum.length < curword.length ? curword : accum), "")
}

// console.log( "practice2",practice2("hello ragini Where are you Now helooooooooo")