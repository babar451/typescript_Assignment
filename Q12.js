let name = ["Altmash", "Zeshan", "Zamana", "Zubair", "Subhan"];
let message1 = "Hello ";
let message2 = " ,You are invited to my Marriage on the coming sunday...";
console.log(`${message1}${name[0]}${message2}`);
console.log(`${message1}${name[1]}${message2}`);
console.log(`${message1}${name[2]}${message2}`);
console.log(`${message1}${name[3]}${message2}`);
console.log(`${message1}${name[4]}${message2}`);
// we can also do it using for loop:
for (let index = 0; index < name.length; index++) {
    console.log(`${message1}${name[index]}${message2}`);
}
export {};
