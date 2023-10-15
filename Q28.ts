import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "age",
        message: "Please enter your age: "
}
]);
if (answer.age<2) {
    console.log("The person is a baby.");
} 
else if(answer.age>=2 && answer.age<4){
    console.log("The person is a toddler.");
}
else if(answer.age>=4 && answer.age<13){
    console.log("The person is a kid.");
}
else if(answer.age>=13 && answer.age<20){
    console.log("The person is a teenager.");
}
else if(answer.age>=20 && answer.age<65){
    console.log("The person is an adult.");
}
else if(answer.age>=65){
    console.log("The person is an elder.");
}