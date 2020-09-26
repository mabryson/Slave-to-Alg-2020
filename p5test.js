let pg
let textSize = 1550
let posOffset = 10
let sizeOffset = 50
let tiles = 100
let tileSize
let loopDuration = 2 * 60

function setup() {
  createCanvas(windowWidth, windowHeight)

  pg = createGraphics(width, height)
  pg.textFont('Helvetica');
  pg.textAlign(CENTER, CENTER)
  pg.blendMode(SCREEN)
  pg.translate(width / 2, height / 2)
  pg.textSize(50)
  pg.fill(255)
  pg.text('an idea is clear in one persons mind', 0, 0)

  tileSize = width / tiles

  // Throttle frame rate for performance
  frameRate(0.25)
}

function draw() {
  
  background('rgba(0, 0, 0, 1)')

  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, PI)
  
  for (let y = 0; y < tiles; y++) {
  	for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      const waveY = cos(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      
      const sx = x * tileSize + waveX * sin(u)
      const sy = y * tileSize + waveY * sin(u)
      const sw = tileSize
      const sh = tileSize 

      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
