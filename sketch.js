var dog = createSprite(200, 200, 20, 50);
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dogImage = loadImage("Dog.png/dog")
}

function setup() {
	createCanvas(500, 500);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
}

function readStock(data) {
  foodS=data.val():
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}

function display() {
dog.display();
}