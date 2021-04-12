
function preload() {
    //load the images here
    catSitting=loadAnimation("images/cat1.png")
    ratWalking=loadImage("images/mouse1.png")
    catWalking=loadAnimation("images/cat2.png","images/cat3.png")
    backgroundImage=loadImage("images/garden.png")
    catImage=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,50,50)
    cat.addAnimation("cat1",catWalking)
    cat.scale=0.1

    mouse=createSprite(200,600,30,30)
    mouse.addImage("mouse1",ratWalking)
    mouse.scale=0.1
cat.velocityX=-4
}

function draw() {

    background(backgroundImage);
   if(cat.x-mouse.x<cat.width/2+mouse.width/2){

    cat.velocityX=0
    cat.changeAnimation("cat2",catSitting)

 }
 else{
     cat.velocityX=-4
 } 


     drawSprites();
}

