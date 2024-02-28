import React, { useState } from 'react';
import './about.css';
import aboutImage from './image/aboutus.jpg'; // Import the image
import background from './image/background.jpg';

const About = () => {
  // State to manage the selected service
  const [selectedService, setSelectedService] = useState('Quality Policy');

  // Data for different services based on the selected service
  const serviceData = {
    'Quality Policy': {
      content: 'Artis Biotech will consistently deliver excellent products and services that exceeds the needs and expectations of each and every customer. We are committed to ensure premium quality with affordable price and the experience of extraordinary customer service that last forever.'
    },
    'Vision': {
      content: 'On this earth, we are the most Reliable Partner for Pharmaceutical Research.'
    },
    'Mission': {
      content: 'We are committed to transform research globally by delivering Premium quality Products & services with our impeccable customer service, technical know-how & most affordable price.'
    },
    'Core Values': {
      content: [
        'Integrity',
        'Innovation',
        'Customer Satisfaction',
        'Environmental Responsibility',
        'Quality Excellence',
        'Affordability'
      ]
    }
  };

  // Function to handle service button clicks
  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div>
      <section>
        <div className="background-image">
          <img src={background} alt="About Us Image" />
          <h2 className="heading1">ABOUT US</h2>
          <div className="right-side">
            <h5>Home Custom Analysis</h5>
          </div>
        </div>
      </section>
      
      <div className="section">
        <div className="content">
          <h2>ARTIS STANDARDS</h2>
          <p>We are one of the world leading companies in manufacturing pharmaceutical standards, including stable-isotope labeled internal standards, metabolites, degradation compounds/impurities, and inhibitor reference compounds. Our products are widely used in Bioanalysis (BA) for preclinical/early stage clinical studies and Bioequivalence (BE) studies for generic drug development.</p>
          <p>We also provide stable-isotope labeled reference standards for environmental and agricultural uses.</p>
          <p>All our products and documents are prepared under our Laboratory Manual, which is very closed to GLP regulations. Every single standard ships with a Certificate of Analysis, HNMR, MS, and HPLC. High Resolution HPLC and Carbon NMR are on client's request. Audit reports are also available on request.</p>
          <p>Our utmost goal is to provide high-quality, low-cost standard compounds and commercial non-available research chemicals to global pharmaceutical, biotechnological, clinical and bio-analytical companies.</p>
          
          <div className="buttons">
            <button><i className="fab fa-twitter"></i></button>
            <button><i className="fab fa-facebook-square"></i></button>
            <button><i className="fab fa-google-plus-g"></i></button>
            <button><i className="fab fa-linkedin"></i></button>
          </div>
        </div>
        <div className="image">
          <img src={aboutImage} alt="About Us Image" />
        </div>
      </div>

      <section className="section" style={{ height: "400px", backgroundColor: 'rgb(248, 239, 239)'}}>
  <div className="content">
    <h2>WHY CHOOSE US?</h2>
    <hr className="horizontal-line" /> {/* Horizontal line */}
    <div className="service-buttons">
      {Object.keys(serviceData).map((service, index) => (
        <button
          key={index}
          onClick={() => handleServiceClick(service)}
          className={selectedService === service ? 'clicked' : ''}
        >
          {service}
        </button>
      ))}
    </div>
    {selectedService && (
      <div className="service-details">
        {Array.isArray(serviceData[selectedService].content) ? (
          <ul>
            {serviceData[selectedService].content.map((value, index) => (
              <li key={index}><i className="fas fa-arrow-right"></i> {value}</li>
            ))}
          </ul>
        ) : (
          <p>{serviceData[selectedService].content}</p>
        )}
      </div>
    )}
  </div>
</section>


    </div>
  );
};

export default About;
