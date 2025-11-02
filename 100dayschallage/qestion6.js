const isPalindrome = (str) => {
  str = str.toLowerCase();
  let reverseStr = str.split("").reverse().join("")
  console.log(reverseStr)
  return str === reverseStr ? true : false
}

console.log(isPalindrome("hello"))