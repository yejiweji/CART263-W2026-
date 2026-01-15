// Task 1 - Q3 Yejin Oh 40229957


// RECTANGLE 1 VARIABLES (controlled by mouse click)
let x1, y1, w1, h1;
let r1, g1, b1;

// RECTANGLE 2 VARIABLES (controlled by spacebar)
let x2, y2, w2, h2;
let r2, g2, b2;

// RECTANGLE 3 VARIABLES (moves automatically, colour changes on mouse)
let x3, y3, w3, h3;
let r3, g3, b3;

function setup() {
    createCanvas(600, 400); 

    // Initialize rectangle 1
    x1 = 50;
    y1 = 50;
    w1 = 60;
    h1 = 60;
    r1 = 255;
    g1 = 0;
    b1 = 0;

    // Initialize rectangle 2
    x2 = 200;
    y2 = 50;
    w2 = 60;
    h2 = 60;
    r2 = 0;
    g2 = 255;
    b2 = 0;

    // Initialize rectangle 3
    x3 = 350;
    y3 = 0;
    w3 = 60;
    h3 = 60;
    r3 = 0;
    g3 = 0;
    b3 = 255;
}

function draw() {
    background(0); // Clear canvas each frame

    // ---- Draw Rectangle 1 ----
    fill(r1, g1, b1);
    rect(x1, y1, w1, h1);

    // ---- Draw Rectangle 2 ----
    fill(r2, g2, b2);
    rect(x2, y2, w2, h2);

    // ---- Draw Rectangle 3 ----
    fill(r3, g3, b3);
    rect(x3, y3, w3, h3);

    // ---- Move rectangle 3 downward ----
    y3 = y3 + 2; // move 2 pixels per frame downward

    // ---- Check bottom bounds: if at bottom, reset to top ----
    if (y3 > height) {
        y3 = 0; // reset to top
    }
}

// ---- Update rectangle 1 position on mouse click ----
function mousePressed() {
    x1 = mouseX;
    y1 = mouseY;
}

// ---- Update rectangle 2 position on spacebar ----
function keyPressed() {
    if (key === ' ') { // spacebar
        x2 = random(width - w2);  // new random x
        y2 = random(height - h2); // new random y
    }
}

// Colour change whenever mouse moves ----
function mouseMoved() {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
}
