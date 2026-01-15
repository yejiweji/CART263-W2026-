// Task 1 - Q5 Yejin Oh 40229957


// Counter variable for number of ellipses to draw
let counter = 0;

// Canvas dimensions
const canvasWidth = 600;
const canvasHeight = 400;


// ORANGE SQUARE OBJECT
let orangeSquare = {
    x: 20,    
    y: 20,
    w: 80,
    h: 80,
    r: 255,
    g: 165,
    b: 0
};


// BONUS II: RED SQUARE OBJECT
let redSquare = {
    x: 120,    
    y: 20,
    w: 80,
    h: 80,
    r: 255,
    g: 0,
    b: 0
};

// ELLIPSE VARIABLES
let ellipseRadius = 20;         // initial radius
let ellipseAlpha = 50;          // initial alpha

// SETUP FUNCTION
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// DRAW FUNCTION
function draw() {
    background(0); // clear canvas

    // --- Draw orange square ---
    displaySquare(orangeSquare);

    // --- Draw red square (BONUS II) ---
    displaySquare(redSquare);

    // --- Ellipses logic ---
    // Only draw if counter is between 1 and 10
    if (counter >= 1 && counter <= 10) {
        let i = 0;               // counter for while loop
        let currentRadius = ellipseRadius;
        let currentAlpha = ellipseAlpha;

        while (i < counter) {
            drawCircle(canvasWidth/2, canvasHeight/2, currentRadius, currentAlpha);
            currentRadius += 10;    // increase radius for next circle
            currentAlpha += 20;     // increase alpha for next circle
            i++;
        }
    }
}

// FUNCTION TO DISPLAY A SQUARE
function displaySquare(square) {
    // --- Check if mouse is over the square ---
    if (checkCollisionWithSquare(square)) {
        fill(
            min(square.r + 50, 255), // lighter when hovered
            min(square.g + 50, 255),
            min(square.b + 50, 255)
        );
    } else {
        fill(square.r, square.g, square.b); // original colour
    }

    rect(square.x, square.y, square.w, square.h);
}

// FUNCTION TO CHECK IF MOUSE IS INSIDE A SQUARE
function checkCollisionWithSquare(square) {
    if (mouseX >= square.x && mouseX <= square.x + square.w &&
        mouseY >= square.y && mouseY <= square.y + square.h) {
        return true;
    }
    return false;
}

// FUNCTION TO DRAW A CIRCLE (BONUS I)
function drawCircle(x, y, radius, alphaVal) {
    fill(255, 255, 255, alphaVal);
    ellipse(x, y, radius * 2, radius * 2);
}

// MOUSE CLICK EVENT
function mousePressed() {
    // --- Increment counter if orange square clicked ---
    if (checkCollisionWithSquare(orangeSquare)) {
        counter++;
        if (counter > 10) counter = 10; // max 10
    }

    // --- BONUS II: decrement counter if red square clicked ---
    if (checkCollisionWithSquare(redSquare)) {
        counter--;
        if (counter < 0) counter = 0; // min 0
    }
}
