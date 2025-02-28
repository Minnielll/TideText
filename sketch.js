let bg
let waveY = 400
let waveVelY = -3.5
let waveState = false
let foot
let feetX = []
let feetY = []
let m
function preload() {
  bg = loadImage("bg.jpg")
  foot = loadImage("foot.png")
}
function setup() {
  createCanvas(877, 620);
  bg.resize(width, height)
  foot.resize(100, 0)
  m = minute()
}
function draw() {
  imageMode(CENTER)
  if (minute() != m) {
    m = minute()
    waveState = true
  }
  image(bg, width / 2, height / 2)
  for (let i = 0; i < feetX.length; i++) {
    image(foot, feetX[i], feetY[i])
  }
  wave()
  if (waveState == true) {
    waveY += waveVelY
    if (waveY < 0) {
      waveVelY *= -1
      feetX = []
      feetY = []
    }
    if (waveY > 400) {
      waveVelY *= -1
      waveState = false
    }
  }
}

function mousePressed() {
  feetX.push(mouseX)
  feetY.push(mouseY)
}
function wave() {
  beginShape()
  noStroke()
  stroke(255, 80)
  strokeWeight(20)
  fill(67, 152, 255, 200)//RGBA
  vertex(-50, height)
  for (let x = -50; x < width + 50; x += 1) {
    vertex(x, noise(x * 0.01, frameCount * 0.001) * 200 + waveY)
  }
  vertex(width + 50, height)
  endShape()
}