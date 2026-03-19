class DrawingBoard {
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    this.drawingBoardId = drawingBoardId;

    let self = this;

    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });
  }

  overCanvas(e) {
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
  }

  clickCanvas(e) {
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);

////// TASK 1 LOGIC FOR PART A
    if (this.drawingBoardId === "partA") {

      // SHIFT + CLICK = REMOVE nearest circle
      if (e.shiftKey) {
        let nearestIndex = -1;
        let nearestDist = Infinity;

        for (let i = 0; i < this.objectsOnCanvas.length; i++) {
          let obj = this.objectsOnCanvas[i];
          let dx = obj.x - this.mouseOffsetX;
          let dy = obj.y - this.mouseOffsetY;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < nearestDist) {
            nearestDist = dist;
            nearestIndex = i;
          }
        }

        // remove if close enough
        if (nearestIndex !== -1) {
          this.objectsOnCanvas.splice(nearestIndex, 1);
        }

      } else {
        // NORMAL CLICK = ADD NEW CIRCLE
        let radius = Math.random() * 20 + 10;

        let newCircle = new CircularObj(
          this.mouseOffsetX,
          this.mouseOffsetY,
          radius,
          "#" + Math.floor(Math.random() * 16777215).toString(16),
          "#ffffff",
          this.context
        );

        this.addObj(newCircle);
      }
    }
  }
////////
  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  animate() {
    // clear ONCE per frame
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update();
      this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement) {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }
  }
}