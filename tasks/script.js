function setup() {
    createCanvas(600, 400);
    background(255);

    let x, y, w, h;
    let r, g, b;

    /* Ellipse 1 */
    x = 150;
    y = 200;
    w = 160;
    h = 80;
    r = 255;
    g = 0;
    b = 0;

    fill(r, g, b);
    ellipse(x, y, w, h);

    /* Ellipse 2 */
    x = 300;
    y = 140;
    w = 100;
    h = 160;
    r = 0;
    g = 255;
    b = 0;

    fill(r, g, b);
    ellipse(x, y, w, h);

    /* Ellipse 3 */
    x = 450;
    y = 260;
    w = 200;
    h = 100;
    r = 0;
    g = 0;
    b = 255;

    fill(r, g, b);
    ellipse(x, y, w, h);
}
