import inquirer from "inquirer";
let alien_color = await inquirer.prompt([
    {
        type: "list",
        name: "color",
        choices: ["green", "yellow", "red"],
        message: "Please select the color: "
}
]);
if (alien_color.color == "green") {
    console.log("The player just earned 5 points");
} else if(alien_color.color =="yellow") {
    console.log("The player just earned 10 points");
}
else if(alien_color.color =="red"){
    console.log("The player just earned 15 points");
}