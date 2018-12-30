class Mover {
  constructor () {
    this.pos = createVector(windowWidth / 2, windowHeight / 2)
    this.prevPos = createVector(this.pos.x, this.pos.y)
    this.velocity = createVector(0, 0)
    this.topSpeed = 5
    this.offset = 0
    this.attr = p5.Vector.fromAngle(TWO_PI*3)

    

    this.r = 5

    //this.col = color('hsba(15, 50%, 0%, 0.5)')
    this.col = color(100, 100, 0, 1)

    // this.col = color(0, 150, 150)
  }

  set fromMousePosition(vec) {
    this.pos.x = vec.x
    this.pos.y = vec.y
  }

  set attrFromAngleInRad(angle) {
    this.attr = p5.Vector.fromAngle(angle)
  }

  update () {
    // Physics
    this.attr = createVector(mouseX, mouseY)
    this.acceleration = p5.Vector.sub(this.attr, this.pos)
    this.acceleration.setMag(0.05)
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.topSpeed)
    this.pos.add(this.velocity)

    // line(this.attr.x, this.attr.y, this.pos.x, this.pos.y)

    this.acceleration.mult(0)
    // this.attr.x += 0.5
    // this.attr.y += noise(this.offset)*3

    constrain(this.attr.x, 50, windowWidth - 50)
    constrain(this.attr.y, 50, windowHeight - 50)
  }

  show () {
    //this.r = (noise(this.offset) * 10)
    this.offset += 0.05

    fill(this.col)
    noStroke()
    ellipse(this.pos.x, this.pos.y, this.r)
    // fill(0)
    // ellipse(this.attr.x, this.attr.y, this.r)
  }

  edges () {
    if (this.pos.x > windowWidth) this.pos.x = 0
    else if (this.pos.x < 0) this.pos.x = windowWidth
    if (this.pos.y > windowHeight) this.pos.y = 0
    else if (this.pos.y < 0) this.pos.y = windowHeight

    if (this.attr.x > windowWidth) this.attr.x = 0
    else if (this.attr.x < 0) this.attr.x = windowWidth
    if (this.attr.y > windowHeight) this.attr.y = 0
    else if (this.attr.y < 0) this.attr.y = windowHeight

  }
}

// class Controller { }
