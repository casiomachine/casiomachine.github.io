var xOff = 0, 
brush, 
seed = 7662, 
message = 'Debugging:'

// function preload() {

//     //

// }

function setup () {
  createCanvas(windowWidth, windowHeight, P2D)
  colorMode(HSB, 255, 255, 255, 1)
  // createCanvas(400, 400, P2D);
  background(255)
  
  noiseSeed(seed)
  randomSeed(seed)
  brush = new Mover()

  console.log(message)
}

function draw () {
  // background(255);

  brush.edges()
  brush.update()
  brush.show()
  
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed () {
  background(255)
}

function keyPressed () {
  switch (key) {
    case 's':
      saveCanvas('test', 'png')
      break

    case 'c':
      clear()
      break
  }
}
// function preload() {

//     var scripts = [
//         "UX"
//     ]

// }
