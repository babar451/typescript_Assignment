function make_shirt(size:string = "large", text:string = "I love typescript"){
    console.log(`Size = ${size}, message = ${text}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "Good vibes only!")