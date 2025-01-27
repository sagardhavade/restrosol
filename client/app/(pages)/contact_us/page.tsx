import React from 'react';
import ContactPage from './ContactPage';
import './style/style.css';
const page = () => {
  return (
    <>
      <div className="section1400">
        <div className="top_card_section">
          <div className="top_card_title">Contact Us</div>
          <div className="top_title_bottom_line"></div>
          <div className="category_details_name">Connect with Us</div>
          <div className="category_headline">
            The Restrosol ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels
            with ease using the Experts
          </div>
        </div>
        <ContactPage />
      </div>
    </>
  );
};

export default page;
