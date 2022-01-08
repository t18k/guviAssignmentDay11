// 1.Color a span/div element content when a user moves the mouse over the element.
let p = document.getElementById("colourChange");
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
	p.style.color = "red";
}

function logMouseOut() {
	p.style.color = "black";
}

// 2.Use prompt to read a value from user and display it in the span element.
let a = prompt("Enter an input:");
let promptPrint = document.getElementById("promptPrint");
promptPrint.innerText = a;

// 3.Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
document.getElementById("clickevent").addEventListener("click", print);

function print(e) {
	let print = document.getElementById("printHere");
	print.innerText = `(X, Y) : (${e.clientX}, ${e.clientY})`;
}

// 4.Write a Javascript code for character counts in the textarea.
document.getElementById("textInput").addEventListener("keyup", countPrint);

function countPrint(e) {
	console.log(e.target.value.length);
}

// 5.
function convertToBinary() {
	let x = document.getElementById("decimal").value;
	let binary = 0;
	let rem,
		i = 1;
	while (x !== 0) {
		rem = x % 2;
		x = parseInt(x / 2);
		binary += rem * i;
		i = i * 10;
	}
	document.getElementById("binary").innerHTML = binary;
}

// 6. form validation
function validation() {
	let x = document.getElementById("numb").value;
	let text;
	if (isNaN(x) || x < 1 || x > 10) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("val").innerHTML = text;
}

// 7.
function fullscreen() {
	let video = document.getElementById("myvideo");
	video.requestFullscreen();
}

// 8.spacebar and close window
function spacebar() {
	let keyPressed = document.getElementById("space").value;
	if (keyPressed === " ") {
		alert("Thank You..!!");
		window.close();
	} else alert("Invalid Key Pressed");
}
