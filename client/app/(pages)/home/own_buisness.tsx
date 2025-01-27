import React from 'react';
import Link from 'next/link';
import './style/style.css';
import Image from 'next/image';
import frame from '../../../public/images/Frame.png'
function Own_buisness() {
  return (
    <div className="own_business">
      <div className="own_business_title">Start your business today</div>
      <div className="own_business_paragraph">Exceptional outcomes through unparalleled insight.</div>
      <div className="own_business_button">
        <div className="own_business_left_button">
          <Link href="/service">Explore Services </Link>
        </div>
        <div className="own_business_right_button">
          <Link href="/contact_us">Connect with us</Link>
        </div>
      </div>
      <div className='own_business_frame'>
      <Image src={frame} alt="Logo" width={790} height={477} />
      </div>
    </div>
  );
}

export default Own_buisness;
