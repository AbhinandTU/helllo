// to find the min and max between two numbers 


// 
// minimum
function findMax(a, b) {
  return Math.max(a, b);
}
// 
// minimum 
function findMin(a, b) {
  return Math.min(a, b);
}

// user input
let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// parsefloat
let num1 = parseFloat(input1);
let num2 = parseFloat(input2);


if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  

  let max = findMax(num1, num2);
  let min = findMin(num1, num2);
  
  
  alert(`The maximum between ${num1} and ${num2} is ${max}.`);
  
  alert(`The minimum between ${num1} and ${num2} is ${min}.`);
}
