const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\w/g, "")
  let r_str = str.split("").reverse().join("")
  return str === r_str ? true : false
}


console.log(isPalindrome("ragini"))