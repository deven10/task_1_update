const fs = require('fs');
let directory = './images_one';

let files = fs.readdirSync(directory);

let array = [];
files.map((file) => {
    let idx = file.slice(0, -4);
    array.push(idx);
})

let newArray = array.sort(function(a,b){return (a-b)});
console.log(newArray);