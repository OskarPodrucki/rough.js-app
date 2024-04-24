//configuration
let roughSvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");

//======================================================================
//start of testing

//line
// const line = roughSvg.line(0, 0, 100, 100);
// svg.appendChild(line);

// //rectangle
// const test = roughSvg.rectangle(200, 200, 400, 400, {
// 	roughness: 0,
// 	fill: "transparent",
// 	fillStyle: "solid",
// });
// test.addEventListener("click", () => {
// 	console.log("click");
// });
// svg.appendChild(test);

// //ball
// var color = "rgb(100,100,100)";
// const ball = roughSvg.circle(1000, 500, 500, {
// 	roughness: 0,
// 	fill: color,
// 	fillStyle: "solid",
// });
// ball.addEventListener("click", () => {
// 	var color = rgb(Math.random(256),Math.random(256),Math.random(256));
// 	console.log("click");
// 	console.log(color);
// });
// svg.appendChild(ball);

//end of testing
//======================================================================

//adding rectangle
//configuration
const buttonAddRectangle = document.querySelector("#addRectangle");
buttonAddRectangle.addEventListener("click", () => {
	console.log("test");
	drawRectangle(globalX, globalY);
});

const buttonAddDiamond = document.querySelector("#addDiamond");
buttonAddDiamond.addEventListener("click", () => {
	console.log("test");
	drawDiamond(globalX, globalY);
});

let globalX = 1030; //1030
let globalY = 10; //10

//elipse
const elipse = roughSvg.ellipse(globalX + 250, globalY + 50, 500, 100, {
	roughness: 0,
	fill: "pink",
	fillStyle: "solid",
});
elipse.addEventListener("click", () => {
	console.log("click");
});
svg.appendChild(elipse);

//line
const line = roughSvg.line(
	globalX + 250,
	globalY + 140,
	globalX + 250,
	globalY + 100
);
svg.appendChild(line);

globalY = globalY + 140;

//rectangle
function drawRectangle(x, y) {
	const line = roughSvg.line(
		globalX + 250,
		globalY + 125,
		globalX + 250,
		globalY + 100
	);
	svg.appendChild(line);

	const rectangle = roughSvg.rectangle(x, y, 500, 100, {
		roughness: 0,
		fill: "pink",
		fillStyle: "solid",
	});
	rectangle.addEventListener("click", () => {
		console.log("click");
	});
	svg.appendChild(rectangle);
	globalY = globalY + 125;
}

//diamond
function drawDiamond(x, y) {
	const line = roughSvg.line(
		globalX + 250,
		globalY + 125,
		globalX + 250,
		globalY + 100
	);
	svg.appendChild(line);

	const diamond = roughSvg.rectangle(
		globalX + 250,
		globalY + 50,
		100 / Math.sqrt(2),
		100 / Math.sqrt(2),
		{
			roughness: 0,
			fill: "pink",
			fillStyle: "solid",
		}
	);
	diamond.addEventListener("click", () => {
		console.log("click");
	});
	svg.appendChild(diamond);
	globalY = globalY + 125;
	console.log(globalX);
	console.log(globalY);
}
