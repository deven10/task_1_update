const fs = require('fs');

// function imgArr(){
let directory = './images_one';
let files = fs.readdirSync(directory);
console.log(files);
// }

// let array = [];
// files.map((file) => {
//     let idx = file.slice(0, -4);
//     array.push(idx);
// }) 

// let imgArrayOne = array.sort(function(a,b){return (a-b)});

// console.log("images index = ",imgArrayOne);


// localStorage.setItem('ImageArrayOne', imgArrayOne);


// var fs = require('fs');

// function allImage(){
//     let directory = './images';
//     let files = fs.readdirSync(directory);
//     return files;
// }

// let imagesArrayOne = allImage();

// console.log(imagesArrayOne);