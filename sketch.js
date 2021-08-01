var iss,issImg;
var spacecraft,spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var spacebg,spacebg1;

function preload(){
issImg=loadImage("iss.png");
spacebg1=loadImage("spacebg.jpg");
spacecraft1=loadImage("spacecraft1.png");
spacecraft2=loadImage("spacecraft2.png");
spacecraft3=loadImage("spacecraft3.png");
spacecraft4=loadImage("spacecraft4.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


iss=createSprite(350,250,150,80);
iss.addImage(issImg);

spacecraft=createSprite(310,550,50,50);
spacecraft.addImage(spacecraft1);
spacecraft.scale=0.3;
}

function draw() {
  background(spacebg1);  

  if(keyDown("right")){
    spacecraft.x=spacecraft.x+2;
    spacecraft.addImage("thirdImage",spacecraft3);
     spacecraft.changeImage("thirdImage");
  }
else{
spacecraft.addImage("firstImage",spacecraft1)
    spacecraft.changeImage("firstImage");
}

  if(keyDown("left")){
    spacecraft.x=spacecraft.x-2;
    spacecraft.addImage("forthImage",spacecraft4);
     spacecraft.changeImage("forthImage");
  }
  else{
    spacecraft.addImage("firstImage",spacecraft1)
        spacecraft.changeImage("firstImage");
    }

  if(keyDown("up")){
    spacecraft.y=spacecraft.y-2;
    spacecraft.addImage("secondImage",spacecraft2);
    spacecraft.changeImage("secondImage");
  }
  else{
    spacecraft.addImage("firstImage",spacecraft1)
        spacecraft.changeImage("firstImage");
    }

    if(spacecraft.x<283,spacecraft.y<349){
      textSize(50);
      //textColor("yellow")
      text("Docking Succesful",350,590);
      
    }
  console.log(spacecraft.x,spacecraft.y);
  drawSprites();
}