// Task 1 - Q6 Yejin Oh 40229957

// Canvas dimensions 
const canvasWidth = 500;
const canvasHeight = 500;

// Main text properties
const mainText = "test";
const mainTextSize = 28;
const mainTextColour = {r: 255, g: 255, b: 255}; // white

// Numbers properties
const numberTextSize = 28;   // smaller font for numbers
const topXOffset = 25;       // horizontal spacing for top numbers
const leftYOffset = 30;      // vertical spacing for left numbers
const padding = 10;          // distance from canvas edge
const topNumbersHeight = 30; // height of horizontal numbers to avoid overlap

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(0); // black background

    // Draw main "test" text in centre
    fill(mainTextColour.r, mainTextColour.g, mainTextColour.b);
    textSize(mainTextSize);
    textAlign(CENTER, CENTER);
    text(mainText, canvasWidth / 2, canvasHeight / 2);

    //  First for loop: horizontal numbers 0–9 along top edge 
    textSize(numberTextSize);
    textAlign(LEFT, TOP); // left-top alignment
    const horizontalCount = 10; // 0 to 9
    for (let i = 0; i < horizontalCount; i++) {
        const xPos = padding + i * topXOffset; // horizontal offset
        const yPos = padding;                  // top edge
        text(i, xPos, yPos);
    }

    //  Second for loop: vertical numbers 1–15 along left edge, shifted down
    textAlign(LEFT, TOP); // left-top alignment
    const verticalMax = 15; // numbers 1 to 15
    for (let i = 1; i <= verticalMax; i++) {
        const xPos = padding;                               // hug left edge
        const yPos = padding + topNumbersHeight + (i - 1) * leftYOffset; // shift down
        text(i, xPos, yPos);
    }
}
