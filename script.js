// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
console.log(min(2, 3))


// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function circumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumference(4))

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function char_count(str, letter) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('mississippi', 's'));