import React, {useEffect} from 'react';
import '../styles/Pricing.css'; // Make sure to create this CSS file

const Pricing = () => {

    useEffect(()=>{
        document.title='Pricing | Neutrinium'
      })

      
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-message">
        We're joking! It's all free, all you got to pay is <strong>Paying Attention</strong> while you study.
      </p>
    </div>
  );
};

export default Pricing;
