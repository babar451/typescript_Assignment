let magicians:string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Criss Angel"];
// making make_great function to add Great at the start of each name
function make_great(magicians:string[]){
    let great_magicians:string[] = magicians.map(magician=>`Great ${magician}`);
    return great_magicians;
}
let great_names = make_great(magicians); // array containing the names with great
function show_magician(name:string[]){
    for (let index = 0; index < name.length; index++) {
        console.log(name[index]);
    }
}
show_magician(great_names);
console.log("Original names");
show_magician(magicians);