var retanguloFixo, retanguloMovel;

function setup() {
  createCanvas(800,400);
  retanguloFixo = createSprite(200, 200, 60, 40);
  retanguloFixo.debug = true;
  retanguloFixo.shapeColor = "green";
  retanguloMovel = createSprite(400, 200, 80, 40);
  retanguloMovel.debug = true;
  retanguloMovel.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  retanguloMovel.x = mouseX;
  retanguloMovel.y = mouseY;

  if(retanguloMovel.x - retanguloFixo.x < retanguloFixo.width/2 + retanguloMovel.width/2
    && retanguloFixo.x - retanguloMovel.x < retanguloFixo.width/2 + retanguloMovel.width/2 
    &&  ){
    retanguloMovel.shapeColor = "red";
    retanguloFixo.shapeColor = "red";
  }
else {
  retanguloFixo.shapeColor = "green";
  retanguloMovel.shapeColor = "green";
}
  console.log(retanguloMovel.x -
    retanguloFixo.x)


  drawSprites();
}