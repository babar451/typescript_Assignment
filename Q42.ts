let magicians:string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Criss Angel"];
// making function to add Great at the start of the name
function make_great(name:string){
    return ("Great "+name);
}
// calling make_great function for each index of the array
for (let index = 0; index < magicians.length; index++) {
    magicians[index] = make_great(magicians[index]);
}
// makng function to print each index of the array
function show_magician(name:string[]){
    for (let index = 0; index < name.length; index++) {
        console.log(name[index]);
    }
}
show_magician(magicians);