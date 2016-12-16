// script.js
// Assignment JS1, SoftDev
// TeamAwwYeah - Misha K & Maddie O

// Enable list item adding on button click
button = document.getElementById("b");
button.addEventListener("click", addToList);

// Add listeners for remove on click to all existing list items
listEls = document.getElementsByTagName("li");
for (i = 0; i < listEls.length; i++) {
    listEls[i].addEventListener("click", removeFromList);
}

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
