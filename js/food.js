console.log("hey how are you");
window.onload = function(){

var button = document.querySelector("button");
var input = document.querySelector("input");
// var choices = document.querySelector(".choices")


var menu = {"Fries": 10, 
			 "Shakes": 20,
			 "BaconBites": 50, 
			 "Chicken Fingers": 45, 
			 "Fruit Bowls": 9, 
			 "Chips": 29, 
			 "Hot Dogs": 104, 
			 "Salads": 56, 
			 "Pizza": 29, 
			 "Coke": 18}


var menuItems = Object.keys(menu)
var menuQuan = Object.values(menu)
// for(counter=0; counter < menuItems.length; counter++){
// 	Object.getOwnPropertyNames(menu).forEach(
//   function (val, idx, array) {
//     document.querySelector(".menu").innerHTML= val + ' -> ' + menu[val];
//   }
// )
// };
	// document.querySelector('.menu').innerHTML = Object.keys(menu) + " " + Object.values(menu);
	document.querySelector(".menu").innerHTML= menuItems
	
// }

// if(characterCode == 13)
// {
//     return false; // returning false will prevent the event from bubbling up.
// }
// else
// {
//     return true;
// }

// function runScript(e) {
//     //See notes about 'which' and 'key'
//     if (e.keyCode == 13) {
//         var tb = document.getElementById("scriptBox");
//         eval(tb.value);
//         return false;
//     }
// }

button.addEventListener("click", function(){

var customerOrder = input.value;
var itemPair = customerOrder.split(", ");

for(var i = 0; i < itemPair.length; i++){
	var items = itemPair[i].split(": ");
var menuItems = Object.keys(menu)
var menuQuan = Object.values(menu)
for(counter=0; counter < menuItems.length; counter++){
	// if(menuItems[counter] =! items[0]){
	// 	console.log("Sorry we don't carry that item!")
	// }
	if (menuItems[counter] == items[0]) {
	var remainder = menuQuan[counter] - items[1];
	alert("We have " + remainder + " left");
	if (remainder <= 0){
		alert("sorry we don't have enough to complete your order")
	}
	}

  }
}


});



// choices.addEventListener("click", function(){


// });


};




// if (items[0] === menuItems){
// console.log("yeah");
// console.log(items[0]);
// console.log(menuItems);
// console.log(items[0] === menuItems);
// for (var fastFood in menu){
// 	console.log(fastFood);
// 	console.log(menu[fastFood]);
	
// }