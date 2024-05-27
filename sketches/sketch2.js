x = 0 

  

function setup() { 

  createCanvas(windowWidth, windowHeight) 

} 

  

function keyPressed() { 

  if (keyPressed) { 

    fill(255, 255, 0) 

    ellipse(windowWidth/2, windowHeight/2, 150, 100) 

  } 

} 

  

function keyReleased() { 

  if (keyReleased) { 

    fill(255) 

    ellipse(mouseX, mouseY, 50, 75) 

  } 

} 

  

function mousePressed() { 

  if (mouseButton == LEFT) { 

    x += 1 

    if (x == 2) { 

      x = 0 

      background(255) 

    } 

  } 

} 
