var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelector("li")
var clearButton = document.getElementById("clear")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function ToggleDone() {
	ul.innerHTML = "";
}

// function deleteNodeOnClick(e) {
//     var trash = document.querySelectorAll("i");
//     for (var ind = 0; ind < trash.length; ind++) {
//         console.log(e);
//         this.parentNode.parentNode.remove();
//     }
// }

function clearList() {
    ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);

li.addEventListener("click", ToggleDone);

input.addEventListener("keypress", addListAfterKeypress);

clearButton.addEventListener("click", clearList);

