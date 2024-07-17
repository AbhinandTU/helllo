
function printHollowPyramid(rows) {
  for (let i = 1; i <= rows; i++) {

    let spaces = ",";
    for (let j = 1; j <= rows - i; j++) {
      spaces += ".";
    }

     
    for (let j = 1; j <= 2 * i - 1; j++) {
      
      if (j === 1 || j === 2 * i - 1 || i === rows) {
        spaces += "*";
      } else {
        spaces += " ";
      }
    }

    console.log(spaces);
  }
}


printHollowPyramid(5);

