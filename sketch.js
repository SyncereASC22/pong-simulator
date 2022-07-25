//PingPongSound
let boomSound;
 
//When you win the game
let gameWin;
 
//Paddles
let myXPos = 50;
let myYPos = 300;
let enemyXPos = 850;
let enemyYPos = 300;
 
//Ball
let xPos;
let yPos;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
 
//Position Tracking
let ballLeft, ballRight;
let myRight, enemyLeft;
 
//Score
let scoreP1 = 0;
let scoreP2 = 0;
 
function preload(){
    gameWin = loadSound("sounds/gameWin.mp3");
    boomSound = loadSound ("sounds/boomSound.mp3");

}
 
function setup() {
   createCanvas(900, 600);
   noStroke();
   xSpeed = 6;
   ySpeed = 5;
   rectMode(CENTER);
   xPos = random(250,550);
   yPos = random(200,500);
 
}
 
function draw() {
   background(0);
 
   
   fill(255, 255, 255);
   ellipse(xPos, yPos, 20, 20);
 
 
 
   // Ball Movement
   xPos += xSpeed * xDirection;
   yPos += ySpeed * yDirection;
   
   if (xPos < -20 ) {
    xDirection *= -1;
    scoreP2 += 1;
    xPos = 450;
    yPos = 300;  
                 
  }
 
   if (xPos > 920){
    xDirection *= -1;               //If ball hits border
    scoreP1 += 1;
    xPos = 450;
    yPos = 300;
 
   }
 
   if (yPos < 25 || yPos > 575) {
     yDirection *= -1;
   }
 
 
 
   // middle line
   fill(255,255);
   rect(450,450,10,900);
 
//Winner
   if (scoreP1 == 5){
    fill(255,0,0);
    textSize(50);
    text("Red Wins!", 100, 350)
    scoreP1 = 5;
    xPos = 450;
    yPos = 300;
    fill(255,0,0);
    rect(456,260,220,40);
    textSize(20);
    fill(0);
    strokeWeight(5);
    stroke(9);
    fill(255,0,0);
    text("Click Circle To Start!",370,270);
    noStroke();
   }
   if (scoreP1 == 5 || scoreP2 == 5){
    gameWin.play(); 
   }
 
   
   if (scoreP2 === 5){
    fill(0,0,255);
    textSize(50);
    text("Blue Wins!", 570, 350)
    scoreP2 = 5;
    xPos = 450;
    yPos = 300;
    fill(0,0,255);
    rect(456,260,220,40);
    textSize(20);
    fill(0);
    strokeWeight(5);
    stroke(9);
    fill(0,0,255);
    text("Click Circle To Start!",370,270);
    noStroke();
   
   }
 
   if (scoreP1 == 5 || scoreP2 == 5){
    gameWin.play();
 
   }
 
 
   // Scoring
   fill(255,0,0);
   textSize(50);
   text(scoreP1, 370,55)
   fill(0,0,255);
   textSize(50);
   text(scoreP2, 500, 55);
 
   
 
   //Player 1
   fill(255,0,0);
   rect(myXPos,myYPos,20,100);
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 8;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 8;
   }
 
 
 
   //Player 2
   fill(0,0,255);
   rect(enemyXPos,enemyYPos,20,100);
   
   if (keyIsDown(LEFT_ARROW)){
       enemyYPos += 8;
    }
   
   if (keyIsDown(RIGHT_ARROW)){
       enemyYPos -= 8;
    }
   
   
   //window boundaries
   //P1
   if (myYPos <= 40){
    myYPos = myYPos + 8;
   }
 
   if (myYPos >= 560){
    myYPos = myYPos - 8;
   }
 
   //P2
   if (enemyYPos <= 40){
    enemyYPos = enemyYPos + 8;
   }
 
   if (enemyYPos >= 560){
    enemyYPos = enemyYPos - 8;
   }
 
   //Paddle Collision UGHHH
   //P1
   if (xPos > myXPos-20-10 && xPos < myXPos+20+10 && yPos > myYPos-100-10 && yPos < myYPos+100+10){
    xDirection *= -1;
    xSpeed += 0.29;
    ySpeed += 0.29;
    boomSound.play();  
   }
   
   //P2
   if (xPos > enemyXPos-20-10 && xPos < enemyXPos+20+10 && yPos > enemyYPos-100-10 && yPos < enemyYPos+100+10){
    xDirection *= -1;
    xSpeed += 0.29;
    ySpeed += 0.29;
    boomSound.play();
   }
 
 
   
   if(xSpeed >= 11.4 && xSpeed <= 12.9 && ySpeed >= 10.4 && ySpeed <= 10.9){
    fill(random(0,255));
    textSize(70);
    text("FASTER!!", 300,270);

   }
 
 
   let r = random(255,256);
   let b = random(255,256);
   fill(r,0,b);
   ellipse(mouseX, mouseY, 10,10);
       
 
}
 
  function mouseClicked(){
  if (mouseX >= 420 && mouseX <= 470 && mouseY >= 280 && mouseY <= 320){
        scoreP1 = 0;
        scoreP2 = 0;
        xPos += xSpeed * xDirection;
        yPos += ySpeed * yDirection;
        xSpeed = 8;
        ySpeed = 6;
        xDirection *= -1;
        yDirection *= -1;
      }
  }
