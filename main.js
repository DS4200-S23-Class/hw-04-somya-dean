/*
HW 4: Somya and Dean
*/

function mouseOverCircle1() {
	let circle = document.getElementById("circle1")
	mouseOverHandler(circle)
}

function mouseOverCircle2() {
	let circle = document.getElementById("circle2")
	mouseOverHandler(circle)
}

function mouseOverCircle3() {
	let circle = document.getElementById("circle3")
	mouseOverHandler(circle)
}

function mouseOverCircle4() {
	let circle = document.getElementById("circle4")
	mouseOverHandler(circle)
}

function mouseOverHandler(circle) {
	circle.style.fill = "orange";
}

function mouseOutCircle1() {
	let circle = document.getElementById("circle1")
	mouseOutHandler(circle)
}

function mouseOutCircle2() {
	let circle = document.getElementById("circle2")
	mouseOutHandler(circle)
}

function mouseOutCircle3() {
	let circle = document.getElementById("circle3")
	mouseOutHandler(circle)
}

function mouseOutCircle4() {
	let circle = document.getElementById("circle4")
	mouseOutHandler(circle)
}

function mouseOutHandler(circle) {
	circle.style.fill = "black";
}