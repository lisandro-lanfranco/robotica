let angulo = 0;
let diamDisco = 70;
let nbits = 4;
let angleStep = 3*3.141592/180;

function setup() {
  createCanvas(800, 600);
  
  // Crear botones
  let buttonContainer = createDiv().addClass('button-container');
  buttonContainer.parent(document.body);
  
  let bit1Button = createButton('1');
  bit1Button.mousePressed(() => {
    nbits = 1;
  });
  bit1Button.parent(buttonContainer);
  
  let bit2Button = createButton('2');
  bit2Button.mousePressed(() => {
    nbits = 2;
  });
  bit2Button.parent(buttonContainer);
  
  let bit3Button = createButton('3');
  bit3Button.mousePressed(() => {
    nbits = 3;
  });
  bit3Button.parent(buttonContainer);
  
  let bit4Button = createButton('4');
  bit4Button.mousePressed(() => {
    nbits = 4;
  });
  bit4Button.parent(buttonContainer);
  
  let bit5Button = createButton('5');
  bit5Button.mousePressed(() => {
    nbits = 5;
  });
  bit5Button.parent(buttonContainer);
  
  let bit6Button = createButton('6');
  bit6Button.mousePressed(() => {
    nbits = 6;
  });
  bit6Button.parent(buttonContainer);
  
  let bit7Button = createButton('7');
  bit7Button.mousePressed(() => {
    nbits = 7;
  });
  bit7Button.parent(buttonContainer);
  
  let bit8Button = createButton('8');
  bit8Button.mousePressed(() => {
    nbits = 8;
  });
  bit8Button.parent(buttonContainer);

  let leftButton = createButton('Girar Izquierda');
  leftButton.mousePressed(() => angulo -= angleStep);
  leftButton.parent(buttonContainer);

  let rightButton = createButton('Girar Derecha');
  rightButton.mousePressed(() => angulo += angleStep);
  rightButton.parent(buttonContainer);

}

function draw() {
  background(220);
  

  // Translate the origin to the center of the canvas
  translate(width / 2, height / 2);
  rotate(angulo);


  dibujarDisco(nbits);
  rotate(-angulo);
  dibujarSens(nbits);

  
}

function dibujarDisco(bits) {
  stroke(0);

  // Calculate the number of segments based on the number of bits

  for (let j = bits; j > 0; j--) {
    const numSegments = pow(2, j);
    for (let i = 0; i < numSegments; i = i + 2) {
      fill(255);
      arc(
        0,
        0,
        diamDisco * j,
        diamDisco * j,
        (i * 2 * PI) / numSegments,
        ((i + 1) * 2 * PI) / numSegments
      );
      fill(0);
      arc(
        0,
        0,
        diamDisco * j,
        diamDisco * j,
        ((i + 1) * 2 * PI) / numSegments,
        ((i + 2) * 2 * PI) / numSegments
      );
    }
  }

  // Draw the center hole
  fill(255);
  ellipse(0, 0, 20, 20);


}

function dibujarSens(bits) {
  noFill();
  stroke(255, 0, 0);
  
  let c;

  for (let i = 1; i < bits + 1; i++) {
    ellipse((i * diamDisco) / 2 - 10, 2, 10, 10);
    
    let colorPixel = get(width / 2 + (i * diamDisco) / 2 - 10, height / 2 + 2) //Consultamos el color del pixel
    
    fill(colorPixel); 

    rect((i * diamDisco) / 2 - 15, height / 2 - 35, 20, 20)
    noFill();
    line((i * diamDisco) / 2 - 10, 7, (i * diamDisco) / 2 - 15, height / 2 - 32)
    //text("1", (i * diamDisco) / 2 - 10, height / 2 - 20)
  }
  

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    angulo -= angleStep;
  } else if (keyCode === RIGHT_ARROW) {
    angulo += angleStep;
  }
}
