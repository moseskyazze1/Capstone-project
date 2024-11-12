import React from 'react';
import './terms.css';  // Make sure you have a CSS file for styling if needed.

function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>Welcome to Fantasy Football! By using our services, you agree to the following terms and conditions. Please read them carefully.</p>
      </section>
      
      <section>
        <h2>1. User Agreement</h2>
        <p>By accessing or using this website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, you should not use the website.</p>
      </section>
      
      <section>
        <h2>2. Privacy Policy</h2>
        <p>We value your privacy. Please refer to our <a href="/privacy-policy">Privacy Policy</a> for information on how we collect, use, and protect your data.</p>
      </section>
      
      <section>
        <h2>3. Restrictions</h2>
        <p>You may not use the website for any unlawful purpose or in a manner that could damage, disable, or impair the website.</p>
      </section>
      
      <section>
        <h2>4. Limitation of Liability</h2>
        <p>We are not liable for any direct or indirect damages resulting from the use of the website or services.</p>
      </section>
      
      <section>
        <h2>5. Governing Law</h2>
        <p>These terms and conditions are governed by the laws of the United States. Any disputes will be resolved in the courts located in [Your Location].</p>
      </section>
      
      <section>
        <h2>6. Changes to the Terms</h2>
        <p>We reserve the right to modify these terms at any time. Please check this page periodically for any updates.</p>
      </section>

      <p>Last Updated: [Date]</p>
    </div>
  );
}

export default Terms;
