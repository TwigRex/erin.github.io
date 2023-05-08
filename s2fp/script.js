let clock;
let star;
let cx, cy;
// color for gradient
var g1, g2;
// color for the lines
var lh, lm;
// color for the stars
var st;

    
// for the big dipper
function preload() {
  back = loadImage('https://i.imgur.com/UA1kcDU.png');
  star = loadImage('https://i.imgur.com/Asa9XuI.png');
}

function setup() {
  createCanvas(700, 700);
  imageMode(CENTER);
  angleMode(DEGREES);
  // to make the number of stars change every sec
  frameRate(1);
  
  // changing colors depending on hr of the day
  if (hour() >= 3, hour() <= 9) {
    g1 = color(60, 57, 110);
    g2 = color(255, 215, 166);
    st = color(250, 240, 207);
    lh = color(208, 204, 219);
    lm = color(195, 188, 214);
    rootChange();
  } else if (hour() >= 10, hour() <= 16) {
    g1 = color(176, 204, 214);
    g2 = color(147, 180, 191);
    st = color(189, 213, 222);
    lh = color(187, 226, 240);
    lm = color(100, 146, 163);
    rootChange();
  } else if (hour() >= 17, hour() <= 23) {
    g1 = color(222, 147, 118);
    g2 = color(247, 222, 163);
    st = color(250, 240, 207);
    lh = color(235, 129, 108);
    lm = color(212, 130, 99);
    rootChange();
  } else {
    g1 = color(57, 85, 110);
    g2 = color(27, 39, 48);
    st = color(112, 135, 156);
    lh = color(127, 153, 176);
    lm = color(84, 111, 135);
    rootChange();
  }
}

function draw() {
  // background color
  setGradient(g1, g2);

  //drawing starry background
  for (var i = 0; i < second(); i++) {
    var x = random(0, 750);
    var y = random(0, 750);
    noStroke();
    fill(st);
    ellipse(x, y, 5, 5);
  }
  
  // to center the actual clock
  translate(width / 2, height / 2);

  // minute lines
  noStroke();
  push();
    for (let minDot = 0; minDot < 60; minDot++) {
      fill(lm);
      rect(-1, -120, 1, 15);
      rotate(6); // 360 degrees ÷ 60 minutes
    }
  pop();
  
  // hour lines
  push();
    for (let hrDot = 0; hrDot < 24; hrDot++) {
      fill(lh);
      rect(-1, -200, 2, 25);
      rotate(15); // 360 degrees ÷ 24 hours
    }
  pop();
   
  //drawing big dipper aka hr hand and rotating it (360 degrees for 24 hours)
  push();
    rotate(-(hour() / 24 * 360));
    image(star, 0, 0, 700, 700);
  pop();
  
  // drawing color changing minute hand dot
  minutes = map(minute(), 0, 60, 0, 360);
  push();
    rotate(minutes);
    fill(30 + (minute() * 3), 50 + (minute() * 2), 136 + (minute() * 3));
    noStroke();
    ellipse(0, -120, 10, 10);
  pop();
}

function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(g1, g2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function rootChange() {
    document.querySelector(':root').style.setProperty('--t1a', g1);
    document.querySelector(':root').style.setProperty('--t1b', g2);
}
