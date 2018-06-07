// flag used to set color of the circle white
const ALL_WHITE = true;

// the circle that we want print on screen
var circle;

// flag used to check if the mouse was inside the circle or not
var wasInside = false;

function Color(r, g, b){
	this.r = r;
	this.g = g;
	this.b = b;

	this.setRandomColor = function(){
		this.r = parseInt(random(50,250));
		this.g = parseInt(random(50,250));
		this.b = parseInt(random(50,250));
	}

	this.allWhite = function(){
		this.r = 255;
		this.g = 255;
		this.b = 255;
	}
}

function Circle(xPos, yPos, diam){
	this.xPos = xPos;
	this.yPos = yPos;
	this.diam = diam;
	this.rad = this.diam / 2;
	this.color = new Color(255,255,255);

	this.changeColor = function (ALL_WHITE){

		if(ALL_WHITE)
			this.color.allWhite();

		else
			this.color.setRandomColor();
	}

	this.drawCircle = function (){
		stroke(0);
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.xPos, this.yPos, this.diam);
	}
};

function mouseIsInside(){
	xDist = abs(circle.xPos  - mouseX);
	yDist = abs(circle.yPos  - mouseY);
	distance = sqrt(pow(xDist, 2) + pow(yDist,2));

	if(distance <= (circle.rad))
		return true;

	return false;
}

/* Program starts from here*/
function setup() {
	createCanvas(600,400);
	background(0);

	circle = new Circle(width / 2, height / 2, 20);
}

function draw() {
	if(mouseIsInside() && !wasInside){
		circle.changeColor();
		wasInside = true;
	}

	else if(!mouseIsInside() && wasInside){
		circle.changeColor(ALL_WHITE);
		wasInside = false;
	}

	circle.drawCircle();
}

function mousePressed(){
	circle.diam += 20;
	circle.rad = circle.diam / 2;
}
