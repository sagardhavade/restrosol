import React from 'react';
import Excited from '../common/faq_excited';
import Glimse from '../home/glimse_section';
import Emerging from './Emerging';
import Existing from './Existing';
import Link from 'next/link';
import './style/style.css';
const page = () => {
  return (
    <>
      <div className="section1400">
        <div className="top_section">
          <div>
            <div className="top_section_title">What type of Business You’re Into?</div>
            <div className="top_section_paragraph">
              You take care of the video quality and we take care of everything else
            </div>
          </div>
          <div className="top_resturant_section">
            <Link href="#emerging" className="resturant_section">
              Emerging Restaurant
            </Link>
            <Link href="#existing" className="resturant_section">
              Existing Restaurant
            </Link>
          </div>
        </div>
        <Emerging />
        <div className="bottom_title">Existing Restaurant</div>
        <Existing />
        <div className="glimse_section">
          <Glimse />
        </div>
        <Excited />
      </div>
    </>
  );
};

export default page;
