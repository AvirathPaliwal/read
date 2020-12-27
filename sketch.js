//Create variables here
var dogimage,dog1image;
var dog;
var food;
var database,mypos;
var feed,addfeed;

function preload()
{
  //load images here
  dogimage=loadImage("Dog.png");
  dog1image=loadImage("happydog.png");
}

function setup() {
	createCanvas(900, 600);
  dog=createSprite(500,450,50,50)
  dog.addImage("d",dogimage);
  dog.scale=0.3
  database=firebase.database();
     var l=database.ref("Food");
     l.on("value",read)

     feed=createButton("FEED THE DOG");
     feed.position(700,95);
     feed.mousePressed(feedDog);

     addFeed=createButton("ADD FOOD");
     addfeed.position(800,95);
     addfeed.mousePressed(addFoods);
}


function draw() {  
  background("green")
  
  drawSprites();
  textSize(23)
  stroke("yellow")
  fill("red");
  text("Note: press UP_ARROW key to feed drago milk!",200,50);
  //add styles here
   textSize("33")
   fill("red")
   stroke("blue")
   text("Food remaining" + food,170,200);
}



function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}

function feedDog(){
  dog.addImage(dog1image);

  
}


