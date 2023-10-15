let current_users:string[] = ["Azam", "Babar", "Zeshan","Zaman", "Ali"];
let new_users:string[] = ["Eric", "ali", "Otis", "azaM", "Ruby"];
// Making the array names into lowercase
let lower_current = current_users.map(user=>user.toLowerCase());
let lower_new = new_users.map(user=>user.toLowerCase());
for (let index = 0; index < new_users.length; index++) {
    if (lower_current.includes(lower_new[index])) {
        console.log(`Username = ${new_users[index]} is taken, enter a new username.`);
    } else {
        console.log(`Username = ${new_users[index]} is available`);
    }
}