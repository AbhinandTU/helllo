
// to calculate diameter of the circle :
function calculateDiameter(radius) {
  return 2 * radius;
}

// to calculate the circumference of the circle:
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// to calculat the the area of the circle
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

//  get the user input then convert to ahhh... num
let input = prompt("Enter the radius of the circle:");
let radius = parseFloat(input);

if (isNaN(radius) || radius <= 0) {
  alert("Please enter a valid positive number for the radius.");
} 

else {
  // this will calculete the diameter , circumference , and area
  
  let diameter = calculateDiameter(radius);
  let circumference = calculateCircumference(radius);
  let area = calculateArea(radius);
  
  alert(`The diameter of the circle is ${diameter}.`);
  alert(`The circumference of the circle is ${circumference}.`);
  alert(`The area of the circle is ${area}.`);
}
