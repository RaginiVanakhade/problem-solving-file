const findMaxMin = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return { max, min }
}

console.log(findMaxMin([3, 4, 7, 5, 4, 6, 7, 90]))
