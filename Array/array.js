// Declare and initialize an empty array
let array = [];

// Get the number of elements to be inputted
let numElements = parseInt(prompt("Enter the number of elements you want to input:"));

// Validate the input
if (isNaN(numElements) || numElements <= 0) {
  alert("Please enter a valid positive number.");
} else {
  // Input array elements from the user
  for (let i = 0; i < 1; i++) {
    let element = prompt(`Enter element ${i + 1}:`);
    array.push(element); // Add the element to the array
  }

  // Print the array elements
  console.log("The array elements are:");
  for (let i = 0; i < array.length; i++) {
    console.log(`Element ${i + 1}: ${array[i]}`);
  }
}
