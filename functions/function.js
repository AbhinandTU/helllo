function cube(value){
  return value * value * value;
}

let rowNumber = prompt("Enter a num");

let number = parseFloat(rowNumber);

if (isNaN(number)){
  alert("enter a num")
}
else{
  result = cube(number);
  alert(`${result}`)
}








