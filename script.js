// script.js
// Assignment JS1, SoftDev
// TeamAwwYeah - Misha K & Maddie O

// Potatomaker
// Adds a potato to the list, called by button click
// Approach #1 for making functions
addToList = function(e) {
    list = document.getElementById("thelist");
    item = document.createElement("li");
    item.innerHTML = "Potato";
    item.addEventListener("click", removeFromList);
    list.appendChild(item);
    //console.log(e);
};

// Potatodeleter
// Removes the clicked-on element from the list
// Approach #2 for making functions
function removeFromList(e) {
    this.remove();
    //console.log(e);
}

// Global vars for fibonacci func
// (Sorry if you dont like loose vars :p )
var cur = 0;
var prev = 0;

function fibonacci(e) {
    if cur = 0 {
	cur = 1;
    } else {
	var store = cur;
	cur = cur + prev;
	prev = store;
    }
    list = document.getElementById("fiblist"); //MAKE THIS IN HTML
    item = document.createElement("li");
    item.innerHTML = cur;
    list.appendChild(item);
}

// Enable new fib element on button click
fibButton = document.getElementById("fib-button") // MAKE THIS IN HTML
fibButton.addEventListener("click", fibonacci);

// Enable list item adding on button click
button = document.getElementById("b");
button.addEventListener("click", addToList);

// Add listeners for remove on click to all existing list items
listEls = document.getElementsByTagName("li");
for (i = 0; i < listEls.length; i++) {
    listEls[i].addEventListener("click", removeFromList);
    // MADDIE ADD LISTENERS HERE
}

// Note to self: functions in JavaScript need to be defined in the doc before
//  they're first used
