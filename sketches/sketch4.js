function setup() { 

  createCanvas(windowWidth, windowHeight) 

} 

  

function mousePressed() { 

  if (mouseButton === LEFT) { 

    stroke(255, 0, 0) 

    line(0, 0, windowWidth, windowHeight) 

  } 

} 

  

function mouseReleased() { 

  stroke(0) 

  line(0, windowHeight, windowWidth, 0) 

} 
