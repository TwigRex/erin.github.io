let dimension = 20;

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;

function setup() {
  var canvas = createCanvas(420, 420);

  // regular color palette + tartaglia and pika
  pair1a = '#000000'; // dark
  pair1b = '#ffffff'; // light
  // blue
  pair2a = '#0A369D';
  pair2b = '#CFDEE7';
  // brown
  pair3a = '#54494B';
  pair3b = '#D2BBA0';
  //purple
  pair4a = '#7F7CAF';
  pair4b = '#EEEEFF';
  // green
  pair5a = '#214F4B';
  pair5b = '#BEC5AD';
  // pink
  pair6a = '#744253';
  pair6b = '#F4DBD8';
  // orange yellow ig
  pair7a = '#A15E49';
  pair7b = '#F6D8AE';
  // childe <3
  pair8a = '#aa362b';
  pair8b = '#62b6ee';
  //pika 
  pair9a = '#df4f59';
  pair9b = '#f1d07d';
  pairnumber = [pair1a, pair2a, pair3a, pair4a, pair5a, pair6a, pair7a, pair8a, pair9a];
  pairletter = [pair1b, pair2b, pair3b, pair4b, pair5b, pair6b, pair7b, pair8b, pair9b];

  // color palettes for my bday
  mbd1a = '#40376E';
  mbd1b = '#D4E4BC';
  mbd2a = '#0E3B43';
  mbd2b = '#BFB1C1';
  mbd3a = '#594157';
  mbd3b = '#AFC1D6';
  mbd4a = '#655A7C';
  mbd4b = '#CDBFD9';
  mbd5a = '#55828B';
  mbd5b = '#C9E4CA';
  mbdnumber = [mbd1a, mbd2a, mbd3a, mbd4a, mbd5a];
  mbdletter = [mbd1b, mbd2b, mbd3b, mbd4b, mbd5b];

  // for christmas
  c1a = '#31081F';
  c1b = '#86BA90';
  c2a = '#6B0F1A';
  c2b = '#B4C292';
  c3a = '#BD8B9C';
  c3b = '#4E5340';
  c4a = '#35524A';
  c4b = '#C2948A';
  c5a = '#36453B';
  c5b = '#D5858C';
  cnumber = [c1a, c2a, c3a, c4a, c5a];
  cletter = [c1b, c2b, c3b, c4b, c5b];

  // for valentines day
  v1a = '#5B2333';
  v1b = '#EDADC7';
  v2a = '#42253B';
  v2b = '#F7ACCF';
  v3a = '#72082D';
  v3b = '#FFA3AF';
  v4a = '#995D81';
  v4b = '#FFBCB5';
  v5a = '#D55672';
  v5b = '#FFDDE2';
  vnumber = [v1a, v2a, v3a, v4a, v5a];
  vletter = [v1b, v2b, v3b, v4b, v5b];

  // for st patricks
  p1a = '#53917E';
  p1b = '#D1FFD7';
  p2a = '#307351';
  p2b = '#B3FFB3';
  p3a = '#4D685A';
  p3b = '#BDE4A7';
  p4a = '#507255';
  p4b = '#A4D4B4';
  p5a = '#243010';
  p5b = '#899878';
  pnumber = [p1a, p2a, p3a, p4a, p5a];
  pletter = [p1b, p2b, p3b, p4b, p5b];

  // july 4
  j1a = '#1d3557';
  j1b = '#f1faee';
  j2a = '#e63946';
  j2b = '#a8dadc';
  j3a = '#780000';
  j3b = '#669bbc';
  j4a = '#c1121f';
  j4b = '#fdf0d5';
  j5a = '#29335C';
  j5b = '#FFC2C2';
  jnumber = [j1a, j2a, j3a, j4a, j5a];
  jletter = [j1b, j2b, j3b, j4b, j5b];

  // halloween
  h1a = '#1f1300';
  h1b = '#f7934c';
  h2a = '#cc5803';
  h2b = '#403d39';
  h3a = '#1F2421';
  h3b = '#D89D6A';
  h4a = '#423E3B';
  h4b = '#FC814A';
  hnumber = [h1a, h2a, h3a, h4a];
  hletter = [h1b, h2b, h3b, h4b];
}

function draw() {
  noStroke();
// draws tiles from the initial array pairing and stops it
  // tileGen();
  specificDay();
  noLoop();
}

function mousePressed() {
//   establish current array pairing
  randomArrayPicker();
}
function mouseReleased() {
//   draw tiles from the current array pairing
  specificDay();
  noLoop();
}

function randomArrayPicker() {
    colorselection = floor(random(0, pairnumber.length));
    mbdSelect = floor(random(0, mbdnumber.length));
    cSelect = floor(random(0, cnumber.length));
    vSelect = floor(random(0, vnumber.length));
    pSelect = floor(random(0, pnumber.length));
    jSelect = floor(random(0, jnumber.length));
    hSelect = floor(random(0, hnumber.length));
}

function tileGen() {
  size();
  for (let i = 0; i < height; i = i + 20) {
    for (let j = 0; j < width; j = j + 20) {
      tilecolor = Math.floor(Math.random() * 2);
      if (tilecolor === 0) {
        fill(pairnumber[colorselection]);
        rootChange();
        // shows up only if it's the color scheme for childe <3
        ifChibi();
        ifPika();
      } else {
        fill(pairletter[colorselection]);
        rootChange();
      }
      rect(j, i, dimension, dimension);
    }
  }
}

// changes css color variable in root to whatever color was randomly selected
function rootChange() {
  document.querySelector(':root').style.setProperty('--color1', pairnumber[colorselection])
  document.querySelector(':root').style.setProperty('--color2', pairletter[colorselection])
  document.querySelector(':root').style.setProperty('--bg', pairletter[colorselection])
}
function mbdRootChange() {
  document.querySelector(':root').style.setProperty('--color1', mbdnumber[mbdSelect])
  document.querySelector(':root').style.setProperty('--color2', mbdletter[mbdSelect])
  document.querySelector(':root').style.setProperty('--bg', mbdletter[mbdSelect])
}
function cRootChange() {
  document.querySelector(':root').style.setProperty('--color1', cnumber[cSelect])
  document.querySelector(':root').style.setProperty('--color2', cletter[cSelect])
  document.querySelector(':root').style.setProperty('--bg', cletter[cSelect])
}
function vRootChange() {
  document.querySelector(':root').style.setProperty('--color1', vnumber[vSelect])
  document.querySelector(':root').style.setProperty('--color2', vletter[vSelect])
  document.querySelector(':root').style.setProperty('--bg', vletter[vSelect])
}
function pRootChange() {
  document.querySelector(':root').style.setProperty('--color1', pnumber[pSelect])
  document.querySelector(':root').style.setProperty('--color2', pletter[pSelect])
  document.querySelector(':root').style.setProperty('--bg', pletter[pSelect])
}
function jRootChange() {
  document.querySelector(':root').style.setProperty('--color1', jnumber[jSelect])
  document.querySelector(':root').style.setProperty('--color2', jletter[jSelect])
  document.querySelector(':root').style.setProperty('--bg', jletter[jSelect])
}
function hRootChange() {
  document.querySelector(':root').style.setProperty('--color1', hnumber[hSelect])
  document.querySelector(':root').style.setProperty('--color2', hletter[hSelect])
  document.querySelector(':root').style.setProperty('--bg', hletter[hSelect])
}

// changes opacity of childe's img in css which is an #childe in the html
function showChibi() {
  var element = document.getElementById('chibi');
  element.style.opacity = "1";
}
function hideChibi() {
  var element = document.getElementById('chibi');
  element.style.opacity = "0";
}
function ifChibi() {
  if (colorselection === 7) {
    showChibi();
  } else {
    hideChibi();
  }
}

// shows pikachu and the act QR code in a similar way childe is
function showPikaCode() {
  var element = document.getElementById('pikaCode');
  element.style.opacity = "1";
}
function hidePikaCode() {
  var element = document.getElementById('pikaCode');
  element.style.opacity = "0";
}
function showPika() {
  var element = document.getElementById('pika');
  element.style.opacity = "1";
}
function hidePika() {
  var element = document.getElementById('pika');
  element.style.opacity = "0";
}
function ifPika() {
  if (colorselection === 8) {
    showPika();
    showPikaCode();
    
  } else {
    hidePikaCode();
    hidePika();
  }
}

function specificDay() {
  // if it's my bday; thinking of adding a QR code to my portfolio site once i make that
  if (day == 16 && month == 4) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(mbdnumber[mbdSelect]);
          mbdRootChange();
        } else {
          fill(mbdletter[mbdSelect]);
          mbdRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  // if it's christmas
  } else if (day == 25 && month == 12) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(cnumber[cSelect]);
          cRootChange();
        } else {
          fill(cletter[cSelect]);
          cRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  // if valentines
  } else if (day == 14 && month == 2) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(vnumber[vSelect]);
          vRootChange();
        } else {
          fill(vletter[vSelect]);
          vRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  // st patricks
  } else if (day == 17 && month == 3) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(pnumber[pSelect]);
          pRootChange();
        } else {
          fill(pletter[pSelect]);
          pRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  // july 4
  } else if (day == 4 && month == 7) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(jnumber[jSelect]);
          jRootChange();
        } else {
          fill(jletter[jSelect]);
          jRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  // halloween :)
  } else if (day == 31 && month == 10) {
    size();
    for (let i = 0; i < height; i = i + 20) {
      for (let j = 0; j < width; j = j + 20) {
        tilecolor = Math.floor(Math.random() * 2);
        if (tilecolor === 0) {
          fill(hnumber[hSelect]);
          hRootChange();
        } else {
          fill(hletter[hSelect]);
          hRootChange();
        }
        rect(j, i, dimension, dimension);
      }
    }
  } else {
    tileGen();
  }
} 

// i wanted to figure out how to resize the qr code
// but i couldn't figure it out all the way
// function size() {
//   if ((innerWidth * innerHeight) <= 767) {
//     dimension = 15;
//   } 
// }
function size() {
  dimension = 20;
}