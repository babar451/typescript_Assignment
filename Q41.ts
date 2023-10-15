let magicians:string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Criss Angel"];
function show_magician(name:string){
    console.log(name);
}
for (let index = 0; index < magicians.length; index++) {
    show_magician(magicians[index]);
}