function setup() {
	// Create a canvas the two arguments are the respictevly
	// the x and y position
	createCanvas(600, 400);

}

function draw() {

	background(0);

	// roof
	fill(0,200,15, 200);
	noStroke();
	triangle(80,100, 140,25, 200,100);

	// fire place
	fill(0,200,15);
	noStroke();
	rect(160,30, 25, 50);

	//walls
	fill(100,52, 67);
	rect(80,100, 120,90);

}
