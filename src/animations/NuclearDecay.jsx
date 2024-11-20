import React, { useEffect } from 'react';
import p5 from 'p5';

const NuclearDecay = () => {
  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let decayRate = 0.02; // Decay rate of particles
      let totalParticles = 200; // Initial number of particles

      class Particle {
        constructor() {
          // Position in 3D space
          this.pos = p.createVector(p.random(-200, 200), p.random(-200, 200), p.random(-200, 200));
          this.size = p.random(10, 20); // Size of the particle
          this.lifetime = 255; // Alpha value for fade out
        }

        update() {
          // Simulate decay by reducing lifetime
          this.lifetime -= decayRate * 100;
        }

        display() {
          // Display particle as a sphere with fading opacity
          p.push();
          p.translate(this.pos.x, this.pos.y, this.pos.z);
          p.fill(255, 182, 193, this.lifetime); // Pastel pink
          p.noStroke();
          p.sphere(this.size);
          p.pop();
        }

        isDecayed() {
          // If lifetime is below 0, particle has fully decayed
          return this.lifetime < 0;
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.7, p.WEBGL);
        for (let i = 0; i < totalParticles; i++) {
          particles.push(new Particle());
        }
      };

      p.draw = () => {
        p.background(240, 248, 255); // Light pastel blue background
        p.orbitControl(); // Enable mouse to rotate view in 3D
        p.ambientLight(150);

        // Draw all particles
        particles.forEach((particle, index) => {
          particle.update();
          particle.display();

          // Remove particle if decayed
          if (particle.isDecayed()) {
            particles.splice(index, 1);
          }
        });

        // Display formula for nuclear decay
        p.push();
        p.translate(-p.width / 4, p.height / 3, 0);
        p.fill(0);
        p.textSize(18);
        p.text(
          'N(t) = N₀ e^(-λt)',
          -p.width / 4,
          -p.height / 3
        );
        p.text(
          `Remaining particles: ${particles.length}`,
          -p.width / 4,
          -p.height / 3 + 30
        );
        p.pop();
      };

      // Reset particles if all have decayed
      p.mousePressed = () => {
        if (particles.length === 0) {
          for (let i = 0; i < totalParticles; i++) {
            particles.push(new Particle());
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth * 0.8, p.windowHeight * 0.7);
      };
    };

    const myP5 = new p5(sketch, 'p5-container');

    return () => {
      myP5.remove(); // Cleanup p5 instance on unmount
    };
  }, []);

  return (
    <div>
      <div id="p5-container" style={{ width: '80%', height: '70vh', margin: '0 auto' }}></div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          <strong>Nuclear Decay Simulation:</strong> Rotate the view by clicking and dragging. Click to reset particles.
        </p>
      </div>
    </div>
  );
};

export default NuclearDecay;
