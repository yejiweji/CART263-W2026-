// Task 1 - Q7 Yejin Oh 40229957

// Canvas and grid properties
const canvasWidth = 600;
const canvasHeight = 400;
const circleSize = 40;          // base size for shapes (multiple of 5)
const shapePadding = 2;         // spacing between shapes
let shapesAreCircles = true;    // toggle between circles and squares

// Random colour for all shapes
let shapeColour;

// Grid dimensions
let cols;
let rows;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // Calculate how many columns and rows based on circleSize and padding
    cols = floor(canvasWidth / circleSize);
    rows = floor(canvasHeight / circleSize);

    // Pick a random colour on load
    shapeColour = {r: random(0, 255), g: random(0, 255), b: random(0, 255)};
    
    noStroke();
}

function draw() {
    background(0); // clear canvas

    // Nested for loop: draw grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Position for each shape
            const xPos = col * circleSize + circleSize / 2;
            const yPos = row * circleSize + circleSize / 2;

            fill(shapeColour.r, shapeColour.g, shapeColour.b);

            // Shape size adjusted for padding
            const adjustedSize = circleSize - shapePadding;

            // BONUS: even rows = circles, odd rows = squares on load
            if ((row % 2 === 0 && shapesAreCircles) || (row % 2 !== 0 && !shapesAreCircles)) {
                ellipse(xPos, yPos, adjustedSize, adjustedSize);
            } else {
                rectMode(CENTER);
                rect(xPos, yPos, adjustedSize, adjustedSize);
            }
        }
    }
}


// Change colour on spacebar
function keyPressed() {
    if (key === ' ') {
        shapeColour = {r: random(0, 255), g: random(0, 255), b: random(0, 255)};
    }
}

// Toggle shapes on mouse click
function mousePressed() {
    shapesAreCircles = !shapesAreCircles;
}
