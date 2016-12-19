// script.js
// Assignment JS1, SoftDev
// TeamAwwYeah - Misha K & Maddie O


var list = document.getElementsByTagName("li");
var thelist = document.getElementById("thelist");
var btn = document.getElementById("b");
var fibobtn = document.getElementById("f");
var fibolist = document.getElementById("fibolist");
var fibonum = document.getElementsByClassName("fol")

// Potatomaker
// Adds a potato to the list, called by button click
// Approach #1 for making functions
var addToList = function() {
    var item = document.createElement("li");
    item.innerHTML = "Potato";
    item.addEventListener("mouseover", changeHeader);
    item.addEventListener("mouseout", revertHeader);
    item.addEventListener("click", removeFromList);
    thelist.appendChild(item);
    console.log(list.length);
}

// Potatodeleter
// Removes the clicked-on element from the list
// Approach #2 for making functions
var removeFromList = function() {
    this.remove();
};

var changeHeader = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = this.innerHTML;
};

var revertHeader = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = "Hello World!";
};




var fibonacci = function(e) {
    var first = 1;
    var second = 1;
    for (var i = 0; i < e; i++) {
    var temp = second;
    second = first + second;
    first = temp;
    }
    return first;
}

// Enable new fib element on button click
var fiboadd = function() {
    var newFibo = document.createElement("li");
    newFibo.className = "fol";
    newFibo.innerHTML = fibonacci(fibonum.length);
    fibolist.appendChild(newFibo);
}

// Add listeners for remove on click to all existing list items
for (var x = 0; x < list.length; x++) {
    list[x].addEventListener("mouseover", changeHeader);
    list[x].addEventListener("mouseout", revertHeader);
    list[x].addEventListener("click", removeFromList);
}

// Enable list item adding on button click
btn.addEventListener("click", addToList);
fibobtn.addEventListener("click", fiboadd);
