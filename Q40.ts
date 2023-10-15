function make_album(name: string, title: string, tracks?: number) {
    if (tracks) {
        let obj = {
            artist_name: name,
            album_title: title,
            tracks_no: tracks
        }
        return obj;
    }
    else {
        let obj = {
            artist_name: name,
            album_title: title
        }
        return obj
    }

}
console.log(make_album("The Streets", "Has It Come To This?"));
console.log(make_album("Pink Floyd", "Brain Damage"));
console.log(make_album("Arctic Monkeys", "D Is For Dangerous"));
console.log(make_album("Arctic", "D Is For Dangerous", 5));