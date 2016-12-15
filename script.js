addToList = function() {
    list = document.getElementById("thelist");
    item = document.createElement("li");
    item.innerHTML = "Potatoes";
    list.appendChild(item);
    console.log("boop")
}

button = document.getElementById("b");
button.addEventListener("click", addToList);
