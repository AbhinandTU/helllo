function printPyramidStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    
    let spaces = "";
    for (let j = 1; j <= rows - i; j++) {
      spaces += " "; 
    }

    
    let stars = "";
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += "*"; 
    }

    
    let pattern = spaces + stars;

    
    console.log(pattern);
  }
}


printPyramidStarPattern(5);
