function setup() { 

  createCanvas(windowWidth, windowHeight) 

} 

  

function keyPressed() { 

  if (keyCode == 65) { 

    fill(128, 0, 128) 

    triangle(100, 100, 150, 50, 200, 100) 

  } 

  if (keyCode == 66) { 

    fill(255, 165, 0) 

    triangle(250, 250, 300, 200, 350, 250) 

  } 

} 

  

function mousePressed() { 

  fill(255) 

  triangle(mouseX, mouseY, mouseX + 100, mouseY, mouseX + 50, mouseY - sqrt(7500)) 

} 
