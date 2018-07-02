function Shape(){

	xCenter = width / 2;
	yCenter = height / 2;

	this.drawShape = function(){
		if(mouseX >= 50 && mouseX <= 100){
				drawEllipse();
			}
			else if(mouseX > 100 && mouseX <= 300){
				drawRect();
			}
			else {
				drawLine();
			}
	}

	drawLine = function(){
		stroke(255);
		line(0, 0, width, height);
	}

	drawPoint = function(){
		stroke(255);
		point(xCenter, yCenter);
	}

	drawEllipse = function(){
		fill(255);
		noStroke();
		ellipse(xCenter, yCenter, 100);
	}

	drawRect = function(){
		fill(255);
		noStroke();
		rect(xCenter - 50, yCenter - 50, 100, 100);
	}
}

function setup() {
	createCanvas(600, 400);
	shape = new Shape();
}

function draw() {
	background(0);
	shape.drawShape();
}
