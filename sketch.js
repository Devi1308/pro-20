var  Tom , tomImg,tomImg2,tomImg3,tomImg4;
var Jerry , jerryImg,jerryImg2,jerryImg3,jerryImg4;
var ground,groundImg;
var edge;

function preload() {
    //load the images here
    tomImg=loadImage("images/tomOne.png");
    jerryImg=loadImage("images/jerryOne.png");
    groundImg=loadImage("images/garden.png");
    jerryImg2=loadImage("images/jerryTwo.png");
    tomImg2=loadImage("images/tomTwo.png");
    jerryImg3=loadImage("images/jerryFour.png");
    tomImg3=loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    ground=createSprite(500,400,1000,800);
    ground.addImage(groundImg);
    ground.scale=1;
    ground.x=ground.width/2;
    ground.velocityX=-2;

    Tom=createSprite(800,800,30,30);
    Tom.addImage(tomImg);
    Tom.scale=0.1;

    Jerry=createSprite(300,700,30,30);
    Jerry.addImage(jerryImg);
    Jerry.scale=0.1;

    edge=createEdgeSprites;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(ground.x<0) {
        ground.x=ground.width/2;
      }

    Tom.depth=ground.depth;
    Tom.depth=Tom.depth+1;
      
      //Tom.x = World.mouseX;
     // Tom.y = World.mouseY; 
    if(isTouching(Jerry,Tom)) {
      Jerry.addImage (jerryImg2);
      Tom.addImage(tomImg2); 
    }
    
    else { 
      Jerry.addImage (jerryImg);
      Tom.addImage(tomImg);
        } 
      
    drawSprites();
}

function isTouching()
 { 
     if (Tom.x - Jerry.x < Jerry.width/2 + Tom.width/2 &&
      Jerry.x - Tom.x < Jerry.width/2 +Tom.width/2 &&
      Tom.y - Jerry.y < Jerry.height/2 +Tom.height/2 &&
     Jerry.y - Tom.y < Jerry.height/2 + Tom.height/2) 
     { 
           return true;
     }
      else
       { 
           return false;
         } 
 }





function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  Tom.velocityX=-5;
  Tom.addAnimation("tomRunning",tomImg2);
  Tom.changeAnimation("tomRunning");

  jerryImg.addAnimation("jerryRunning",jerryImg2);
  jerryImg.changeAnimation("jerryRunning");
}

}
