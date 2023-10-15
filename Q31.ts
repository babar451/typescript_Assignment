let users:string[] = ["admin", "Eric", "Jos", "Kane", "Albert"];
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
    name: "username",
    type: "string",
    message: "Please enter your username: "
}])
if (users.length==0) {
    console.log("We need to find some users.")
} else {
if (answer.username == users[0]) {
    console.log("Hello admin, would you like to see a status report?")
} else if(answer.username == users[1] || answer.username == users[2] || answer.username == users[3] || answer.username == users[4]){
    console.log("Thankyou for logging in again")
}
else{
    console.log("You don't have an account, please sign in.")
}
}