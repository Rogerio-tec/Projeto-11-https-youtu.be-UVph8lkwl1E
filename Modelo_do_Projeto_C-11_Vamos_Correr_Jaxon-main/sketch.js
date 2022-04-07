var corredor,corredorImagem;
var estrada,estradaMovimento;
 



function preload(){
 corredorImagem = loadAnimation("Runner-1.png","Runner-2.png");
 estradaMovimento = loadImage("path.png");
  //imagens pré-carregadas


}




function setup(){
  createCanvas(400,400);
   estrada = createSprite(200,200);
   estrada.addImage(estradaMovimento);
   estrada.velocityY = 3;


   corredor = createSprite(200,300);
   corredor.addAnimation("titulo",corredorImagem);
   corredor.scale = 0.10

 


function draw() {
  background(0);
  
   corredor.x = World.mouseX;


   if(estrada.y>400)
   { 
     estrada.y = height/2;
   }


  drawSprites();
}
