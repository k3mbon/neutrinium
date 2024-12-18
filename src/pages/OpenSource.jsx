import React, { useEffect } from 'react';
import '../styles/OpenSource.css'; // Import the CSS file

const OpenSource = () => {

  useEffect(()=>{
    document.title='Open Source | Neutrinium'
  })

  return (
    <div className="open-source-container">
      <h1>Open Source</h1>
      <p className="open-source-description">
        Our mission is to make STEM education accessible to everyone, including educators, students, and developers. We believe that learning should not be hindered by financial constraints. Our project is driven by a passion for education and a commitment to community enrichment. Our motto is: <strong>"Empowering Through Open Collaboration."</strong> in shorts, <strong>IT YOURS TO USE, REPLICATE, KEEP FOR FREE, FOREVER</strong>
      </p>

      
    </div>
  );
};

export default OpenSource;
