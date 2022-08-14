/**
Presione a, b, c y d para que vayan apareciendo las partes que conforman un brazo robot.
*/

float x, y;
float angle1 = 0.0;
float angle2 = 0.0;
float segLength = 120;
boolean flag_base = false;
boolean flag_l1 = false;
boolean flag_l2 = false;
boolean flag_tool = false;

PImage base;

void setup() {
  size(640, 480);

  
  base = loadImage("paralelogramo_base.png");
  
  x = width * 0.3;
  y = height * 0.5;
}

void draw() {
  background(255);
  
  angle1 = 1.4*((mouseX)/float(width) - 0.5) * -PI;
  angle2 = 1.4*((mouseY)/float(height) - 0.5) * PI;
  
  pushMatrix();
  if (flag_base){
    image(base, x-110, y-31);
  }
  if (flag_l1){
    stroke(255,100,0);
    segment(x, y, angle1, 1.0);
    stroke(0,0,255);
    circle(0,0,10);
  }
  if (flag_l2){
    stroke(255,195,0);
    segment(segLength, 0, angle2, 0.9);
    stroke(200,0,200);
    circle(0,0,10);
  }
  
  if (flag_tool){
    stroke(0);
    segment(segLength,0,0, 0.2);
  }
  
  popMatrix();
  
  textSize(30);
  if (flag_base){
    fill(100);
    text("Base", 400, 100);
  }
  
  if (flag_l1){
    fill(0,0,230);
    text("Articulación 1", 400, 150);
    fill(230,100,0);
    text("Eslabon 1", 400, 200);
  }
  
  if (flag_l2){
    fill(200,0,200);
    text("Articulación 2", 400, 250);
    fill(255,195,0);
    text("Eslabon 2", 400, 300);
  }
  
  if (flag_tool){
    fill(0);
    text("Herramienta", 400, 350);
  }

}

void segment(float x, float y, float a, float l) {
  translate(x, y);
  strokeWeight(30*l);
  rotate(a);
  line(0, 0, segLength*l, 0);
}

void keyPressed(){
  if (key == 'a' || key == 'A') {
      flag_base = !flag_base;
  }
  
  if (key == 'b' || key == 'B') {
      flag_l1 = !flag_l1;
  }
  
  if (key == 'c' || key == 'C') {
      flag_l2 = !flag_l2;
  }
  
  if (key == 'd' || key == 'D') {
      flag_tool = !flag_tool;
  }
}
