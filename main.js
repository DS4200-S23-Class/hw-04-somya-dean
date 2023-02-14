/*
HW 4: Somya and Dean
*/

function mouseOverHandler(circle) {
	circle.style.fill = "orange";
}


function mouseOutHandler(circle) {
	circle.style.fill = "black";
}


function mouseClickHandler(circle) {
	if (circle.style.stroke === "palevioletred") {
		circle.style.stroke = "";
	} else {
		circle.style.stroke = "palevioletred";
		circle.style.strokeWidth = 3;
	}

	// display coordinates
	const xCoord = circle.cx.baseVal.value / 40;
	const yCoord = (400 - circle.cy.baseVal.value) / 40;
	const container = document.getElementById("last-point-clicked");
	container.innerHTML = "";
	const text = document.createTextNode(`Coordinates: (${xCoord}, ${yCoord})`);
	container.appendChild(text)
}


// enter coordinate
function enterCoordinate() {
	// get x 
	const xCoord = document.getElementById("x-select").value;
	// get y
	const yCoord = document.getElementById("y-select").value;
	// add a point
	const scaledX = xCoord * 40;
	const scaledY = 400 - (yCoord * 40);

	// get svg
	const svg = document.getElementById("points");
	// create ns container
	const svgns = "http://www.w3.org/2000/svg";

	const circle = document.createElementNS(svgns, "circle");
	circle.setAttributeNS(null, "cx", scaledX);
	circle.setAttributeNS(null, "cy", scaledY);
	circle.setAttributeNS(null, "r", 10);
	circle.setAttributeNS(null, "class", "point");
	circle.onmouseover = () => {
		mouseOverHandler(circle);
	}
	circle.onmouseout = () => {
		mouseOutHandler(circle);
	}
	circle.onclick = () => {
		mouseClickHandler(circle);
	}
	svg.appendChild(circle);
}
