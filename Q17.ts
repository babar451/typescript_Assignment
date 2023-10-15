let invite = ["Altmash", "Zeshan", "Zaman", "Imran"];
for (let index = 0; index < invite.length; index++) {
    console.log(`Hello ${invite[index]}, You are invited to the dinner party`);    
}
console.log(`${invite[3]} could not make it to the dinner`);
invite[3] = "Bili";
console.log("Here is the updated list of the invitees:");
for (let index = 0; index < invite.length; index++) {
    console.log(`Hello ${invite[index]}, You are invited to the dinner party`);    
}
// found a bigger table
console.log("I found a bigger dinner table, so I am inviting more people to join us:");
//Adding element at the start of the array:
invite.unshift("Subhan");
//Adding element at the middle of the array
invite.splice(2,0,"Maan");
// Adding element at the end of the array
invite.push("Ali");
for (let index = 0; index < invite.length; index++) {
    console.log(`Hello ${invite[index]}, You are invited to the dinner party`);
}

//removing guests from the list until only two guests remains
for (let index = 6; index > 1; index--) {
    console.log(`Dear ${invite[index]}, I am really sorry to tell you that you are out of the party.`);
    invite.pop();
}
//printing message for the remaining two guests
for (let index = 0; index < invite.length; index++) {
    console.log(`${invite[index]}, you are still invited to the party`); 
}
//removing the last two guests
for (let index = 1; index > -1; index--) {
    invite.pop();
}
//Printing the empty list
console.log(invite);