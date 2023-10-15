// Tests for equality and inequality with strings
let str1 = "Welcome to Panaverse";
let str2 = "Welcome to Panaverse";
let str3 = "welcome to panaverse";
console.log(str1==str2); // result would be true
console.log(str1==str3); // result would be false as two strings are not equal

// Tests using the lower case function
console.log(str1.toLowerCase() == str3); // result would be true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 12;
let num2 = 11;
let num3 = 12;
console.log("num1!=num2 gives ",num1!=num2); // result would be true as num1 is not equal to num2
console.log("num1!=num3 gives ",num1!=num3); // result would be false as num1 is equal to num3
console.log("num1 > num2 gives ",num1>num2); // result would be true as num1 is greater than num2
console.log("num1 >= num3 gives ", num1>=num3); //result would be true as num1 is equal to num3
console.log("num1 <= num2 gives ", num1 <= num2); //result would be false as num1 is neither less than num2 nor is equal to num2

// Tests using "and" and "or" operators
console.log("and operator gives ",num1>num2 && num1==12); // result would be true as both statements are true
console.log("or operator gives ",num1>num2 || num1<12); // true as first statement is true

// Test whether an item is in a array
let arr = ["babar", "bau", "ali", "Gill"];
console.log("Checking array gives ", arr.includes("bau")); // true as bau is in the array

// Test whether an item is not in a array
console.log("Checking an item is not in array gives ", !arr.includes("BABAR")); // gives true as value is not is in the array
