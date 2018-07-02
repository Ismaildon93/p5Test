function Circle(xPos, yPos, diameter){
	this.xPos = xPos; // the initial x position on the canvas
	this.yPos = yPos; // the initial y position on the canvas
	this.diameter = diameter; // the diameter of the circle
	this.radius = this.diameter / 2; // the radius of the circle
	this.xSpeed = 2; // the speed of the circle
	this.color = new Color();

	this.drawCircle = function (){

		this.xPos += this.xSpeed;

		noStroke();
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.xPos, this.yPos, this.radius);
}

	this.changeColor = function(){
		circle.color.setRandomColor();
	}
}

function Color(){

	this.r = 255;
	this.g = 255;
	this.b = 255;

	//change randomly color
	this.setRandomColor = function(){
			this.r = parseInt(random(150,250));
			this.g = parseInt(random(150,250));
			this.b = parseInt(random(150,250));
	}
}

function setup() {
	createCanvas(600, 400);
	circle = new Circle(0, height / 2, 100);

}

function draw() {

	background(0);

	if(circle.xPos > width){
		circle.xSpeed *= -1;
		circle.changeColor();
	}

	else if(circle.xPos < 0){
		circle.xSpeed *= -1;
		circle.changeColor();
	}

	circle.drawCircle();

}
