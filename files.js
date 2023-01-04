const fs = require('fs');
// import * as fs from 'fs';

let directory = './images_one';

let files = fs.readdirSync(directory);

let array = [];
files.map((file) => {
    let idx = file.slice(0, -4);
    array.push(idx);
})

export let imgArrayOne = array.sort(function(a,b){return (a-b)});

console.log("console = ",imgArrayOne);
// localStorage.setItem('ImageArrayOne', imgArrayOne);