let grass;
//let watersprout;
//let waterfountain;
let storefront;
let house;
let rollercoaster;
let amusement;

function preload(){
  watersprouts = loadModel('water_sprouts.obj');
  waterfountain = loadModel('water_fountain.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  grass = loadImage('grass.jpg');
  storefront = loadImage('storefront1.jpg');
  amusement = loadImage('amusement.gif');
  house = loadImage('twostory_house.png');
  rollercoaster = loadImage('rollercoaster.gif')
}

function draw() {
  background(166, 221, 255);
  noStroke()
  orbitControl();
  
  //camera
  
   camera(100, 670, -200 , 0, 0, 0, 0, 1, 0);  camera(400, 55, 0, 0, 0, 0, 0, 1, 0);
  
  //ground
  translate(240, 100, 0);
  push();
  texture(grass);
 // rotateZ(frameCount * 0.01);
//  rotateX(frameCount * 0.01);
 // rotateY(frameCount * 0.01);
  box(900, 10, 700);
  pop();
  
  //street
  translate(0, -5, 0);
  push();
  fill(130, 130, 130)
  box(100, 10, 700);
  pop();
  
  //
  //translate(-5, 0, 0);
  push();
  fill(130, 130, 130);
  box(900, 10, 100);
  pop();
  
  
  //garden in the street
  push();
  translate(0, 55, 0);
  texture(grass);
  sphere(70);
  pop();
  
  //merry-go-round
  
   push();
  translate(20, -32.1,-2.18);
  rotateY(7.85);
  texture(amusement);
  plane(70,45);
  pop();
  
  //house
  
  push();
  translate(-120, -32.5, -120);
  rotateY(7.85);
  texture(house);
  plane(90,50);
  pop();
  
  push();
  translate(-120, -32.5, -210);
  rotateY(7.85);
  texture(house);
  plane(90,50);
  pop();
  
  

  
   push();
  translate(-300, -86.5,220);
  rotateY(8.9);
  texture(rollercoaster);
  plane(350,320);
  pop();
}