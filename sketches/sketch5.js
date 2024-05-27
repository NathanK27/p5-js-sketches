function setup() { 

  createCanvas(windowWidth, windowHeight) 

} 

  

function mousePressed() { 

  if (mouseButton === LEFT) { 

    for (i = 0; i < 10; i++) { 

      fill(random(255), random(255), random(255)) 

      rect(mouseX + i * 20, mouseY, 20, 20) 

    } 

  } 

} 
