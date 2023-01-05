/*-------------------------------------------------------- */
// CATCHING IMAGES FILES DIRECTLY FROM THE FOLDER AND STORING IT IN AN ARRAY

let imgArrNumOne = [];
let imgArrNumOneSorted;

// Box elements 9 divs
let boxOne = document.querySelector(".box__one");

// Buttons that are on right side for toggling the div elements from 9 divs to 6 divs
let firstBtn = document.querySelector(".first");

// Event listener on First button used to display first grid 3x3
firstBtn.addEventListener("click", clickFirstButton);

function clickFirstButton(){
	boxOne.style.display = "grid";
	boxTwo.style.display = "none";
}


$.ajax({
	url: "./images_one",
	success: function(data){
	$(data).find(`a:contains(".png"),
					a:contains(".jpg"),
					a:contains(".avif"),
					a:contains(".jpeg"),
					a:contains(".avif"),
					a:contains(".gif"),
					a:contains(".tiff")`).each(function(){
		
		let filename = this.href.replace(window.location.host, "").replace("http:///images_one/", "");
		console.log("filename => " + filename);
		// let matches = filename.match(/(\d+)/);
		// console.log(matches);
		// let Number = +matches[0];
		// console.log(Number);
		imgArrNumOne.push(filename);
		});
		// imgArrNumOneSorted =  imgArrNumOne.sort((a,b) => a-b);
		imgArrNumOneSorted = imgArrNumOne;
		// console.log("image array one = ", imgArrNumOneSorted);
  

/*-------------------------------------------------------- */


// button present on grid 3x3 and 3x2
let randomBtnOne = document.querySelector(".randomBtnOne");

// all elements that are displayed on DOM
let imageBoxOne = document.querySelectorAll(".imageBoxOne");

// img array for 1st grid 3x3
// let imgArrOne = [
// 		'1.jpg', '2.jpg', '3.jpg', '4.jpg', 
// 		'5.jpg', '6.jpg', '7.jpg', '8.jpg',
// 		'9.jpg', '10.jpg', '11.jpg', '12.jpg',
// 		'13.jpg', '14.jpg', '15.jpg', '16.jpg', 
// 		'17.jpg', '18.jpg', '19.jpg', '20.jpg',
// 		'21.jpg', '22.jpg', '23.jpg', '24.jpg',
// 		'25.jpg', '26.jpg', '27.jpg', '28.jpg', 
// 		'29.jpg', '30.jpg'
// 	];


	let animationDelayOne = [
		'1.75', '1.5s', '1.25s', '1s',
		'0.75s', '0.50s', '0.25s', '0s'
	]


// button present on 3x3 grid used for iteration
randomBtnOne.addEventListener("click", clickRandomFirstButton);

/* --------FUNCTION FOR ITERATING USING FIRST GRID 3x3 TOTAL 9 ELEMENTS--------- */

let initialArray = imgArrNumOneSorted.slice(0,8);  // initial 8 elements that are displayed on DOM
let remainingArray = [];  // the elements that are remaining after loading the first 8 elements on DOM
let jointArr = initialArray;


function clickRandomFirstButton(){  // function for actual logic when iteration button is clicked

		if(remainingArray.length < 1){
			for(let i = 0; i < imgArrNumOneSorted.length; i++){
				if(!jointArr.includes(imgArrNumOneSorted[i])){
						remainingArray.push(imgArrNumOneSorted[i]);
					}
				}
		}
		// console.log("remainging arr starting = " + remainingArray);
	


	let elementsToLoad = [];  // these elements will be displayed on screen after iteration

	if(remainingArray.length >= 8){  // if remaining arr length is greater than 8 then run this loop
		elementsToLoad = remainingArray.slice(0,8); 
		remainingArray = remainingArray.slice(8, remainingArray.length);
	} else {    
		elementsToLoad = remainingArray.slice(0,remainingArray.length);
		remainingArray = remainingArray.slice(remainingArray.length);
	}
	// console.log("Elements to load at start = " + elementsToLoad);
	// console.log("remainging arr after elements loaded = " + remainingArray);
	// elements that will be removed from starting array
	let elementsToRemove = (jointArr.slice(`-${elementsToLoad.length}`));   // ELEMENTS THAT WILL BE REMOVED ON NEXT ITERATION

	let oldElements = [];        // for storing the old elements that will stay in array
	
	for(let i = 0; i < jointArr.length; i++){
	  	if(!elementsToRemove.includes(jointArr[i])){
	    	oldElements.push(jointArr[i]);
	    }
	}

		// this array will be used for displaying the images on DOM
		jointArr = oldElements.concat(elementsToLoad);  // joining two arrays old elements + remaining arrays

/* -------- first iteration for displaying the imgs on DOM ------ */	

		//for removing the animation
		imageBoxOne.forEach((img) => {   // REMOVED ANIMATION CLASS FROM ALL ELEMENTS FOR SAFER SIDE AND THEN WILL ADD ANIMATON AGAIN IF OUR CONDITION MATCHES
			img.classList.remove("animateBox");
		});

		setTimeout(() => {
			imageBoxOne.forEach((img, index) => {   // LOOPING THROUGH THE IMG BOX [1-8 IMG ELEMENTS]

				const images = jointArr[index];
				
				img.style.animationDelay = `${animationDelayOne[index + 1]}`;				

				if(elementsToLoad.includes(images)){   // ADDING ANIMAITON CLASS 
					img.classList.add("animateBox");
				} 
				else {
					img.classList.remove("animateBox");
				}
				
				img.src = `./images_one/${images}`;  // FOR PRINTING NEW IMG ON DOM
			});
		});

		// console.log("remaining array on the end => ", remainingArray);

		if(remainingArray.length < 1){
			remainingArray = imgArrNumOneSorted;
			// console.log("updating remaining array => ", remainingArray);
		}

		console.log("--------------------------------");

		// console.log("array inside= ", imgArrNumOneSorted);
		}
	}
});



/* ----------------------FOR SECOND GRID---------------------------- */


// CATCHING IMAGES FILES DIRECTLY FROM THE FOLDER AND STORING IT IN AN ARRAY
let imgArrNumTwo = [];
let imgArrNumTwoSorted;

// Box elements 6 divs
let boxTwo = document.querySelector(".box__two");

// Buttons that are on right side for toggling the div elements from 9 divs to 6 divs
let secondBtn = document.querySelector(".second");

// Event listener on Second button used to display second grid 3x2
secondBtn.addEventListener("click", clickSecondButton);

function clickSecondButton(){
	boxOne.style.display = "none";
	boxTwo.style.display = "grid";
}

$.ajax({
	url: "./images_two",
	success: function(data){
	$(data).find(`a:contains(".png"),
					a:contains(".jpg"),
					a:contains(".avif"),
					a:contains(".jpeg"),
					a:contains(".avif"),
					a:contains(".gif"),
					a:contains(".tiff")`).each(function(){
		
		let filename = this.href.replace(window.location.host, "").replace("http:///images_two/", "");
		console.log("file name = " + filename);
		// let matches = filename.match(/(\d+)/);
				
		// let Number = +matches[0];
		
		imgArrNumTwo.push(filename);

		});
		imgArrNumTwoSorted =  imgArrNumTwo.sort((a,b) => a-b);
		// console.log("sorted arr two =" + imgArrNumTwoSorted);

// button present on grid 3x3 and 3x2
let randomBtnTwo = document.querySelector(".randomBtnTwo");

// all elements that are displayed on DOM
let imageBoxTwo = document.querySelectorAll(".imageBoxTwo");

// img array for 2nd grid 3x2
// let imagesArrayTwo = [
// 	'1.jpg', '2.jpg', '3.jpg', '4.jpg', 
// 	'5.jpg', '6.jpg', '7.jpg', '8.jpg',
// 	'9.jpg', '10.jpg', '11.jpg'
// ];

let animationDelayTwo = [
	'1s','0.75s', '0.50s', '0.25s', '0s'
]


// button present on 3x2 grid
randomBtnTwo.addEventListener("click", clickRandomSecondButton);

let initialArrayTwo = imgArrNumTwoSorted.slice(0,5);  // initial 8 elements that are displayed on DOM
let remainingArrayTwo = [];  // the elements that are remaining after loading the first 8 elements on DOM
let jointArrTwo = initialArrayTwo;

function clickRandomSecondButton(){
	// generating random array for 3x2 grid


	if(remainingArrayTwo.length < 1){
			// jointArrTwo = initialArray;
		for(let i = 0; i < imgArrNumTwoSorted.length; i++){
				if(!jointArrTwo.includes(imgArrNumTwoSorted[i])){
					remainingArrayTwo.push(imgArrNumTwoSorted[i]);
			}
		}
	}
	// console.log("remaining arr on start = " + remainingArrayTwo);

	let elementsToLoad = [];  // these elements will be displayed on screen after iteration

	if(remainingArrayTwo.length >= 5){  // if remaining arr length is greater than 8 then run this loop
		elementsToLoad = remainingArrayTwo.slice(0,5); 
		
		remainingArrayTwo = remainingArrayTwo.slice(5, remainingArrayTwo.length);
	} else {    
			elementsToLoad = remainingArrayTwo.slice(0,remainingArrayTwo.length);
			
			remainingArrayTwo = remainingArrayTwo.slice(remainingArrayTwo.length);
		}
	// console.log("elements to load = " + elementsToLoad);
	// console.log("remaining arr after elements loaded = " + remainingArrayTwo);

	// elements that will be removed from starting array
	let elementsToRemove = (jointArrTwo.slice(`-${elementsToLoad.length}`));   // ELEMENTS THAT WILL BE REMOVED ON NEXT ITERATION

	let oldElements = [];        // for storing the old elements that will stay in array
	
	for(let i = 0; i < jointArrTwo.length; i++){
	  	if(!elementsToRemove.includes(jointArrTwo[i])){
	    	oldElements.push(jointArrTwo[i]);
	    }
	}

	// this array will be used for displaying the images on DOM
	
		jointArrTwo = oldElements.concat(elementsToLoad);  // joining two arrays old elements + remaining arrays

/* -------- first iteration for displaying the imgs on DOM ------ */	

		//for removing the animation
		imageBoxTwo.forEach((img) => {   // REMOVED ANIMATION CLASS FROM ALL ELEMENTS FOR SAFER SIDE AND THEN WILL ADD ANIMATON AGAIN IF OUR CONDITION MATCHES
			img.classList.remove("animateBox");
		});

		setTimeout(() => {
			imageBoxTwo.forEach((img, index) => {   // LOOPING THROUGH THE IMG BOX [1-8 IMG ELEMENTS]

				const images = jointArrTwo[index];

				img.style.animationDelay = `${animationDelayTwo[index + 1]}`;

				if(elementsToLoad.includes(images)){   // ADDING ANIMAITON CLASS 
					 img.classList.add("animateBox");
				} 
				else {
					img.classList.remove("animateBox");
				}
			
				img.src = `./images_two/${images}`;  // FOR PRINTING NEW IMG ON DOM
			});
		});

		// console.log("ending remaining array => ", remainingArrayTwo);

		if(remainingArrayTwo.length < 1){
			remainingArrayTwo = imgArrNumTwoSorted;
			// console.log("updating remaining array 2 => ", remainingArrayTwo);
		}

		// console.log("remaining arr on end = " + remainingArrayTwo);
		console.log("--------------------------------");	
		}
	}
});

/* ------------- building the logic for practice purpose ------------- */

// const fs = require('fs');
// let directory = './images_one';

// let files = fs.readdirSync(directory);

// let array = [];
// files.map((file) => {
//     let idx = file.slice(0, -4);
//     array.push(idx);
// })

// let newArray = array.sort(function(a,b){return (a-b)});
// console.log(newArray);


////////////////////////////////////////
// import { imgArrayOne } from "./files.js";

// console.log(imgArrayOne);

// const fs = require('fs');

// function imgArr(){
// let directory = './images_one';
// let files = fs.readdirSync(directory);
// return files;
// }

// let sarvesh = imgArr();
// console.log(sarvesh);