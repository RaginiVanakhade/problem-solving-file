const checkTriangleType = (a, b, c) => {
  if(a === b && b === c) {
    // return "Equilateral Triangle"
    console.log("Equilateral Triangle")

  } else if (a === b || b === c || a === c) {
    // return "Isosceles Triangle"
    console.log("Isosceles Triangle")

  } else {
    // return "Scalene Triangle"
    console.log("Scalene Triangle")
  }
}

checkTriangleType(20, 10, 20)