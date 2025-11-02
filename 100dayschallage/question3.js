const findcharcount = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalCount = word.split("").reduce((acc, amulator) => {
   if(amulator === char) {
    return acc + 1
   }
   return acc
  }, 0);

  console.log(totalCount)
  return totalCount
}

findcharcount("hello  WHERE Hello are you", "h")