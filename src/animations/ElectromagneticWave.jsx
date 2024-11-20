import React, { useEffect } from 'react';
import p5 from 'p5';

const ElectromagneticWaves = () => {
  useEffect(() => {
    const sketch = (p) => {
      let electricField = [];
      let magneticField = [];
      let waveLength = 100;
      let amplitudeE = 50; // Amplitude of electric field (E)
      let amplitudeB = 50; // Amplitude of magnetic field (B)
      let frequency = 0.02; // Frequency of the wave (E and B must be the same)
      let waveSpeed = 2; // Speed of wave propagation

      p.setup = () => {
        p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.7, p.WEBGL);

        // Precompute the points along the z-axis
        for (let z = -p.width / 2; z < p.width / 2; z += 15) {
          // Both E and B have the same wavelength and phase, only directions differ
          electricField.push(p.createVector(amplitudeE * p.sin(z * 0.05), 0, z));
          magneticField.push(p.createVector(0, amplitudeB * p.sin(z * 0.05), z));
        }
      };

      p.draw = () => {
        p.background(240, 248, 255); // Light pastel blue background
        p.orbitControl(); // Enable mouse drag for 3D rotation

        // Draw the E and B fields, ensuring they are perpendicular with the same wavelength
        drawFields(p);

        // Update the wave propagation along the z-axis
        for (let i = 0; i < electricField.length; i++) {
          let z = electricField[i].z - waveSpeed;
          if (z < -p.width / 2) {
            z += p.width;
          }

          // Update electric field (E along x-axis, moving along z-axis)
          electricField[i].z = z;
          electricField[i].x = amplitudeE * p.sin(z * frequency);

          // Update magnetic field (B along y-axis, moving along z-axis)
          magneticField[i].z = z;
          magneticField[i].y = amplitudeB * p.sin(z * frequency);
        }

        // Display the formulas for E and B
        p.push();
        p.translate(-p.width / 4, p.height / 3, 0);
        p.fill(0);
        p.textSize(18);
        p.text(
          'E(z, t) = E₀ sin(kz - ωt)',
          -p.width / 4,
          -p.height / 3
        );
        p.text(
          'B(z, t) = B₀ sin(kz - ωt)',
          -p.width / 4,
          -p.height / 3 + 30
        );
        p.pop();
      };

      const drawFields = (p) => {
        // Draw Electric Field (E along x-axis, moving along z)
        p.push();
        p.stroke(255, 182, 193); // Pastel pink for E field
        p.strokeWeight(2);
        for (let i = 0; i < electricField.length; i++) {
          p.line(0, 0, electricField[i].z, electricField[i].x, 0, electricField[i].z);
        }
        p.pop();

        // Draw Magnetic Field (B along y-axis, moving along z)
        p.push();
        p.stroke(152, 251, 152); // Pastel green for B field
        p.strokeWeight(2);
        for (let i = 0; i < magneticField.length; i++) {
          p.line(0, 0, magneticField[i].z, 0, magneticField[i].y, magneticField[i].z);
        }
        p.pop();
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
          <strong>Electromagnetic Waves in 3D:</strong> Rotate the view by clicking and dragging to see the wave from different angles.
        </p>
      </div>
    </div>
  );
};

export default ElectromagneticWaves;
