var x;
var speed = 3; // speed of the circle

function setup() {
	createCanvas(600, 400);
	x = 0;
}

function draw() {
	background(0);

	//create circle
	noStroke();
	fill(255);
	ellipse(x, height / 2, 50);

	if(x > width)
		speed = -speed;

	else if(x < 0)
		speed = -speed;

	x += speed;

}
