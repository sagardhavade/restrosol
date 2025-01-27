import React from 'react';
import './style/style.css';
import Link from 'next/link';
function Excited() {
  return (
    <div className="faq_container">
      <div className="faq_title">Excited to work together on your next project?</div>
      <div className="faq_button">
        <div className="left_button">
          <Link href="/contact_us">Embark on your journey with us </Link>
        </div>
        <div className="right_button">
          <Link href="/service">Schedule your consultation today</Link>
        </div>
      </div>
    </div>
  );
}

export default Excited;
