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