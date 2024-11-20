import React, { useEffect, useState } from 'react';
import p5 from 'p5';

const ProjectileMotion = () => {
  const [angle, setAngle] = useState(45); // Initial angle (in degrees)
  const [shoot, setShoot] = useState(false); // Whether to shoot the ball

  useEffect(() => {
    const sketch = (p) => {
      let ball;
      let gravity = 0.5;
      let isShot = false;

      p.setup = () => {
        p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.5); // Adjusted canvas size
        ball = new Ball(p.width / 10, p.height - 100, p.radians(angle));
      };

      p.draw = () => {
        // Gradient background
        let c1 = p.color(255, 182, 193); // pastel pink
        let c2 = p.color(173, 216, 230); // pastel blue
        setGradient(p, 0, 0, p.width, p.height, c1, c2);

        // Ground Line with pastel color
        p.stroke(180, 200, 250); // pastel purple
        p.strokeWeight(4);
        p.line(0, p.height - 50, p.width, p.height - 50);

        // Show angle
        p.fill(50, 100, 150);
        p.textSize(18);
        p.text(`Angle: ${angle}°`, p.width / 2, 30);

        // Display the ball
        ball.display();

        // If the ball has been shot, update its position based on physics
        if (isShot) {
          ball.update();
        }

        // If the ball hits the ground, stop the motion
        if (ball.y >= p.height - 50) {
          isShot = false;
          ball.reset(); // Reset ball after it hits the ground
          setShoot(false); // Reset the shoot state after the ball stops
        }

        // When the shoot state is true, launch the ball
        if (shoot && !isShot) {
          ball.shoot(p.radians(angle));
          isShot = true;
        }
      };

      class Ball {
        constructor(x, y, launchAngle) {
          this.x = x;
          this.y = y;
          this.r = 20; // Ball radius
          this.vx = 0;
          this.vy = 0;
          this.launchAngle = launchAngle;
          this.initialSpeed = 15; // Initial speed
        }

        display() {
          // 3D effect with shadow
          p.noStroke();
          p.fill(255, 250, 205); // pastel yellow
          p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
          // Shadow
          p.fill(200, 200, 200, 150);
          p.ellipse(this.x + 5, this.y + 5, this.r * 2 + 10, this.r * 2 + 10);
        }

        shoot(angle) {
          this.vx = this.initialSpeed * p.cos(angle);
          this.vy = -this.initialSpeed * p.sin(angle); // Negative because up is -y
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += gravity; // Gravity pulling down the ball
        }

        reset() {
          this.x = p.width / 10;
          this.y = p.height - 100;
          this.vx = 0;
          this.vy = 0;
        }
      }

      // Function to create gradient background
      const setGradient = (p, x, y, w, h, c1, c2) => {
        p.noFill();
        for (let i = y; i <= y + h; i++) {
          let inter = p.map(i, y, y + h, 0, 1);
          let c = p.lerpColor(c1, c2, inter);
          p.stroke(c);
          p.line(x, i, x + w, i);
        }
      };
    };

    const myP5 = new p5(sketch, 'p5-container');

    return () => {
      myP5.remove(); // Cleanup p5 instance on unmount
    };
  }, [angle, shoot]); // Ensure p5 is updated when angle or shoot state changes

  const handleShoot = () => {
    setShoot(true); // Trigger the ball shooting
  };

  return (
    <div>
      <div id="p5-container" style={{ width: '60%', height: '50vh', margin: '0 auto' }}></div>
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="angle">Adjust Angle: </label>
        <input
          type="range"
          id="angle"
          min="0"
          max="90"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
          style={{ margin: '10px', width: '300px' }}
        />
        <span style={{ fontSize: '18px', color: '#FF69B4' }}>{angle}°</span>
        <br />
        <button
          onClick={handleShoot}
          disabled={shoot} // Disable the button once the ball is shot
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#FFB6C1',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Shoot Ball
        </button>
      </div>
    </div>
  );
};

export default ProjectileMotion;
