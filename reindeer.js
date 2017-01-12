
//Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. 
//The name of the reindeer should be prepended with the corresponding color from the other array.



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeers = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];



////and puts them in a new li which is immediately appended to the ul 'deerList
//
//var deerList = document.getElementById("coloredReindeer");
//
////initializes a for loop (for length of reindeers) 
//	for (var i = 0; i < reindeers.length; i++) {
//
////makes a place to put the string
//	var newLi = document.createElement("li");
//
////concatenates colors[i] + " " + reindeers[i] and puts into the li innerText
//	newLi.innerHTML = colors[i] + " " + reindeers[i];
//
////puts the li's in the ul
//	deerList.appendChild(newLi);
//};


//another possibility might be 
//
//
var deerList = document.getElementById("coloredReindeer");									//get target element and put it in a variable
for (var i = 0; i < reindeers.length; i++) {												//initialize a standard for loop to increment through length of reindeer
	var coloredReindeer;																	//declare variable store 
	coloredReindeer = `<li class="${colors[i]}"">${colors[i]}  ${reindeers[i]}</li>`;		//concatenate each iterants value into this string
	deerList.innerHTML+=coloredReindeer;													//the value string is wrapped in <li> tags and given the class with the value of colors current inde																							//this will allow me to target each and and style them independently
}




//var allTheColorsAndDeer = [];
//
//produces a huge array of all the reindeers in each color and does it many many times... not right, but fun
//
//
//for (i = 0; i < colors.length; i++) {
//	for (r = 0; r < reindeer.length; r++) {
//		coloredReindeer.push(colors[i] + " " + reindeer[r]);
//		console.log(coloredReindeer);
//	}
//}
//
//deerList.innerHTML = allTheColorsAndDeer;




