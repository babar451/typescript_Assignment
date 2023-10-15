let name = "Alexa";
// To upper case
console.log(name.toUpperCase());
//To lower case
console.log(name.toLowerCase());
// To title case
const str = "i am going to the PIAIC quarter 1 class.";
const newStr = str.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
console.log(newStr);
export {};
