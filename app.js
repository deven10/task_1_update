// Box elements 9 divs and 6 divs
let boxOne = document.querySelector(".box__one");
let boxTwo = document.querySelector(".box__two");

// Buttons that are on right side for toggling the div elements from 9 divs to 6 divs
let firstBtn = document.querySelector(".first");
let secondBtn = document.querySelector(".second");

// button present on grid 3x3 and 3x2
let randomBtnOne = document.querySelector(".randomBtnOne");
let randomBtnTwo = document.querySelector(".randomBtnTwo");

// all elements that are displayed on DOM
let imageBoxOne = document.querySelectorAll(".imageBoxOne");
let imageBoxTwo = document.querySelectorAll(".imageBoxTwo");

// img array for 1st grid 3x3
let imgArrOne = [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg', 
		'5.jpg', '6.jpg', '7.jpg', '8.jpg',
		'9.jpg', '10.jpg', '11.jpg', '12.jpg',
		'13.jpg', '14.jpg', '15.jpg', '16.jpg', 
		'17.jpg', '18.jpg', '19.jpg', '20.jpg',
		'21.jpg', '22.jpg', '23.jpg', '24.jpg',
		'25.jpg', '26.jpg', '27.jpg', '28.jpg', 
		'29.jpg', '30.jpg'
	];
	

// img array for 2nd grid 3x2
let imgArrTwo = [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg', 
		'5.jpg', '6.jpg', '7.jpg', '8.jpg',
		'9.jpg', '10.jpg', '11.jpg'
	];


// Event listener on First button used to display first grid 3x3
firstBtn.addEventListener("click", clickFirstButton);

function clickFirstButton(){
	boxOne.style.display = "grid";
	boxTwo.style.display = "none";

	clickRandomFirstButton();
}

// button present on 3x3 grid used for iteration
randomBtnOne.addEventListener("click", clickRandomFirstButton);

/* --------FUNCTION FOR ITERATING USING FIRST GRID 3x3 TOTAL 9 ELEMENTS--------- */

let initialArray = imgArrOne.slice(0,8);  // initial 8 elements that are displayed on DOM
let remainingArray = [];  // the elements that are remaining after loading the first 8 elements on DOM
let jointArr = initialArray;
let iteration = false; // was thinking to use a variable for toggling the first iteration but haven't yet used.

console.log("joint arr OUTSIDE => ", jointArr);

function clickRandomFirstButton(){  // function for actual logic when iteration button is clicked

console.log("joint arr before logic = ", jointArr);
console.log("remainingArray before logic = ", remainingArray);
	


		if(remainingArray.length < 1){
			// jointArr = [];
		for(let i = 0; i < imgArrOne.length; i++){
			// if(!jointArr.includes(imgArrOne[i])){
					remainingArray.push(imgArrOne[i]);
				}
			// }
		}

	console.log("remaining array inside function => ",remainingArray);

	let elementsToLoad = [];  // these elements will be displayed on screen after iteration

	if(remainingArray.length >= 8){  // if remaining arr length is greater than 8 then run this loop
		elementsToLoad = remainingArray.slice(0,8); 
		console.log("inside if elementsToLoad = ", elementsToLoad);
		
		remainingArray = remainingArray.slice(8, remainingArray.length);
		console.log("inside if remainingArr = ", remainingArray);
	} else {    
			elementsToLoad = remainingArray.slice(0,remainingArray.length);
			console.log("inside else elementsToLoad = ", elementsToLoad);
			
			remainingArray = remainingArray.slice(remainingArray.length);
			console.log("inside else remainingArray = ", remainingArray);
		}
	
	// elements that will be removed from starting array
	let elementsToRemove = (jointArr.slice(`-${elementsToLoad.length}`));   // ELEMENTS THAT WILL BE REMOVED ON NEXT ITERATION
	console.log("elementsToRemove = ",elementsToRemove);

	let oldElements = [];        // for storing the old elements that will stay in array
	
	for(let i = 0; i < jointArr.length; i++){
	  	if(!elementsToRemove.includes(jointArr[i])){
	    	oldElements.push(jointArr[i]);
	    }
	}

	// this array will be used for displaying the images on DOM
	
		jointArr = oldElements.concat(elementsToLoad);  // joining two arrays old elements + remaining arrays
		console.log("joint arr after logic = ", jointArr);

/* -------- first iteration for displaying the imgs on DOM ------ */	

		//for removing the animation
		imageBoxOne.forEach((img) => {   // REMOVED ANIMATION CLASS FROM ALL ELEMENTS FOR SAFER SIDE AND THEN WILL ADD ANIMATON AGAIN IF OUR CONDITION MATCHES
			img.classList.remove("animateBox");
			// console.log("img => ", img);
		});

		setTimeout(() => {
			imageBoxOne.forEach((img, index) => {   // LOOPING THROUGH THE IMG BOX [1-8 IMG ELEMENTS]
				// console.log("index => ", index);
				// console.log(" :: img => ", img);

				const images = jointArr[index];

				if(elementsToLoad.includes(images)){   // ADDING ANIMAITON CLASS 
					 img.classList.add("animateBox");
				} 
				else {
					img.classList.remove("animateBox");
				}
			
				img.src = `./images_one/${images}`;  // FOR PRINTING NEW IMG ON DOM
			});
		});

		console.log("ending remaining array => ", remainingArray);
		console.log("--------------------------------");
}



/* ----------------------FOR SECOND GRID---------------------------- */

// Event listener on Second button used to display second grid 3x2
secondBtn.addEventListener("click", clickSecondButton);

function clickSecondButton(){
	boxOne.style.display = "none";
	boxTwo.style.display = "grid";

	clickRandomSecondButton();
}

// button present on 3x2 grid
randomBtnTwo.addEventListener("click", clickRandomSecondButton);

let initialArrayTwo = imgArrTwo.slice(0,5);  // initial 8 elements that are displayed on DOM
let remainingArrayTwo = [];  // the elements that are remaining after loading the first 8 elements on DOM
let jointArrTwo = initialArrayTwo;

function clickRandomSecondButton(){
	// generating random array for 3x2 grid

	if(remainingArrayTwo.length < 1){
			// jointArrTwo = initialArray;
	for(let i = 0; i < imgArrTwo.length; i++){
			// if(!jointArrTwo.includes(imgArrTwo[i])){
			remainingArrayTwo.push(imgArrTwo[i]);
		}
			// }
	}

	let elementsToLoad = [];  // these elements will be displayed on screen after iteration

	if(remainingArrayTwo.length >= 5){  // if remaining arr length is greater than 8 then run this loop
		elementsToLoad = remainingArrayTwo.slice(0,5); 
		console.log("inside if elementsToLoad = ", elementsToLoad);
		
		remainingArrayTwo = remainingArrayTwo.slice(5, remainingArrayTwo.length);
		console.log("inside if remainingArr = ", remainingArrayTwo);
	} else {    
			elementsToLoad = remainingArrayTwo.slice(0,remainingArrayTwo.length);
			console.log("inside else elementsToLoad = ", elementsToLoad);
			
			remainingArrayTwo = remainingArrayTwo.slice(remainingArrayTwo.length);
			console.log("inside else remainingArrayTwo = ", remainingArrayTwo);
		}
	
	// elements that will be removed from starting array
	let elementsToRemove = (jointArrTwo.slice(`-${elementsToLoad.length}`));   // ELEMENTS THAT WILL BE REMOVED ON NEXT ITERATION
	console.log("elementsToRemove = ",elementsToRemove);

	let oldElements = [];        // for storing the old elements that will stay in array
	
	for(let i = 0; i < jointArrTwo.length; i++){
	  	if(!elementsToRemove.includes(jointArrTwo[i])){
	    	oldElements.push(jointArrTwo[i]);
	    }
	}

	// this array will be used for displaying the images on DOM
	
		jointArrTwo = oldElements.concat(elementsToLoad);  // joining two arrays old elements + remaining arrays
		console.log("joint arr after logic = ", jointArrTwo);

/* -------- first iteration for displaying the imgs on DOM ------ */	

		//for removing the animation
		imageBoxTwo.forEach((img) => {   // REMOVED ANIMATION CLASS FROM ALL ELEMENTS FOR SAFER SIDE AND THEN WILL ADD ANIMATON AGAIN IF OUR CONDITION MATCHES
			img.classList.remove("animateBox");
			// console.log("img => ", img);
		});

		setTimeout(() => {
			imageBoxTwo.forEach((img, index) => {   // LOOPING THROUGH THE IMG BOX [1-8 IMG ELEMENTS]
				// console.log("index => ", index);
				// console.log(" :: img => ", img);

				const images = jointArrTwo[index];

				if(elementsToLoad.includes(images)){   // ADDING ANIMAITON CLASS 
					 img.classList.add("animateBox");
				} 
				else {
					img.classList.remove("animateBox");
				}
			
				img.src = `./images_two/${images}`;  // FOR PRINTING NEW IMG ON DOM
			});
		});

		console.log("ending remaining array => ", remainingArrayTwo);
		console.log("--------------------------------");	
}



/* ------------- building the logic for practice purpose ------------- */

