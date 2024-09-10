// src/InteractiveArrow.js
import React, { useEffect } from 'react';
import p5 from 'p5';

const InteractiveArrow = () => {
  useEffect(() => {
    const sketch = (p) => {
      let arrow;
      let isDragging = false;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noLoop();
        arrow = new Arrow(p.width / 2, p.height / 2, 100, p.PI / 4);
      };

      p.draw = () => {
        p.background(255);
        arrow.display();
        p.fill(0);
        p.textSize(16);
        p.textAlign(p.CENTER);
        p.text(`Length: ${arrow.length.toFixed(2)}\nAngle: ${p.degrees(arrow.angle).toFixed(2)}°`, p.width / 2, p.height - 30);
      };

      p.mousePressed = () => {
        if (arrow.isNearEnd(p.mouseX, p.mouseY)) {
          isDragging = true;
          arrow.startDrag(p.mouseX, p.mouseY);
        }
      };

      p.mouseDragged = () => {
        if (isDragging) {
          arrow.updateEnd(p.mouseX, p.mouseY);
          p.redraw();
        }
      };

      p.mouseReleased = () => {
        isDragging = false;
      };

      class Arrow {
        constructor(x, y, length, angle) {
          this.origin = p.createVector(x, y);
          this.length = length;
          this.angle = angle;
          this.updateEndPoint();
        }

        updateEndPoint() {
          this.end = p.createVector(
            this.origin.x + this.length * p.cos(this.angle),
            this.origin.y + this.length * p.sin(this.angle)
          );
        }

        display() {
          p.stroke(0);
          p.strokeWeight(2);
          p.line(this.origin.x, this.origin.y, this.end.x, this.end.y);

          // Arrowhead
          let arrowSize = 10;
          let angle = p.atan2(this.end.y - this.origin.y, this.end.x - this.origin.x);
          p.push();
          p.translate(this.end.x, this.end.y);
          p.rotate(angle);
          p.triangle(-arrowSize, -arrowSize, -arrowSize, arrowSize, 0, 0);
          p.pop();
        }

        updateEnd(x, y) {
          let v = p.createVector(x, y).sub(this.origin);
          this.length = v.mag();
          this.angle = p.atan2(v.y, v.x);
          this.updateEndPoint();
        }

        startDrag(mx, my) {
          this.updateEnd(mx, my);
        }

        isNearEnd(px, py) {
          let d = p.dist(px, py, this.end.x, this.end.y);
          return d < 10;
        }
      }
    };

    new p5(sketch, 'p5-container');

    return () => {
      // Cleanup p5 instance
      const canvas = document.querySelector('#p5-container canvas');
      if (canvas) canvas.remove();
    };
  }, []);

  return <div id="p5-container" style={{ width: '100%', height: '100%' }} />;
};

export default InteractiveArrow;
