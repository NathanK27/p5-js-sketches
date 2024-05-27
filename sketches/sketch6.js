function setup() { 

  createCanvas(windowWidth, windowHeight) 

} 

  

function mousePressed() { 

  if (mouseButton === LEFT) { 

    for (i = 0; i < 6; i++) { 

      fill(random(255), random(255), random(255)) 

      circle(mouseX, mouseY, 50 - i * 10) 

    } 

  } 

} 
