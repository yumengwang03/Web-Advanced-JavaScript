//positions
var posX = $(window).width()/2;
var posY = $(window).height()/2;
var leftPosX = 100;
var rightPosX = $(window).width() - 130;
var borderPosX = $(window).width()/2 - 3;
var leftPosY = 0;
var rightPosY = 0;
var leftScore = 0;
var rightScore = 0;

//velocity
var velX = 5;
var velY = 3;

var ball = $('.ball');
var paddleLeft = $('.paddle-left');
var paddleRight = $('.paddle-right');
var border = $('.border');
var leftScoreElement = $('.score-left');
var rightScoreElement = $('.score-right');

function update() {
	posX += velX;
	posY += velY;


//keyPressed
$(document).keydown(function(event) {
  if(event.keyCode == 40) {
    console.log(event.keyCode);
    rightPosY += 0.1;
  } else if(event.keyCode == 38) {
  	rightPosY -= 0.1;
  } else if(event.keyCode == 37) {
  	leftPosY -= 0.1;
  } else if(event.keyCode == 39) {
  	leftPosY += 0.1;
  }
});

	checkBoundaries();

	ball.css('left', posX);
	ball.css('top', posY);
	paddleLeft.css('left', leftPosX);
	paddleRight.css('left', rightPosX);
	paddleLeft.css('top', leftPosY);
	paddleRight.css('top', rightPosY);
	border.css('left', borderPosX);
	
	requestAnimationFrame(update);
}

function checkBoundaries() {
	//paddles not going out of screen
	if (leftPosY <= 10) {
		leftPosY = 10;
	} else if (leftPosY >= $(window).width()-210) {
		leftPosY = $(window).width()-210;
	}

	if (rightPosY <= 10) {
		rightPosY = 10;
	} else if (rightPosY >= $(window).width()-210) {
		rightPosY = $(window).width()-210;
	}

	//ball not going out of screen
	if (posX >= $(window).width()-41) {
		console.log(leftScore);
		leftScore ++;
		velX *= -1;
		// posX = $(window).width()/2;
		// posY = $(window).height()/2;
	}

	if (posX <= 1) {
		rightScore++;
		velX *= -1;
		// posX = $(window).width()/2;
		// posY = $(window).height()/2;
	}

	if (posY >= $(window).height() - 40 || posY <= 0) {
		velY *= -1;
	} 

	//collision with the paddle
	if (posX >= rightPosX - 30 && posY >= rightPosY && posY <= rightPosY + 200) {
	posX -= 1;
	velX *= -1; 
	//console.log('right-hit');
	 } 

	if (posX <= leftPosX + 30 && posY >= leftPosY && posY <= leftPosY + 200) {
	posX += 1;
	velX *= -1; 
	console.log(leftPosX);
	 } 

	 leftScoreElement.text(leftScore);
	 rightScoreElement.text(rightScore);
}

update();


