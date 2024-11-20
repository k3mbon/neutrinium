import React, {useEffect} from 'react';
import '../styles/LicenseAgreement.css';

const LicenseAgreement = () => {

    useEffect(()=>{
        document.title='License & Agreement | Neutrinium'
      })
    
  return (
    <div className="license-container">
      <div className="license-content">
        <h1 className="license-title">License Agreement</h1>
        <p>
          This License Agreement applies to the platform <strong>Neutrinium</strong> and governs your use of the platform. By using Neutrinium, you agree to the terms of this agreement.
        </p>

        <h2>Expat License (MIT)</h2>
        <p>
          Copyright &copy; {new Date().getFullYear()} Angelus 'k3mbon' Fermi &lt;<a href="mailto:angelus.tibiame@gmail.com">angelus.tibiame@gmail.com</a>&gt;
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>

        <h2>Platform Usage</h2>
        <p>
          <strong>Neutrinium</strong> is free for both personal and commercial use. You are free to replicate and distribute the platform under the terms of this license.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about this License Agreement, you can reach me at <a href="mailto:angelus.tibiame@gmail.com">angelus.tibiame@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default LicenseAgreement;
