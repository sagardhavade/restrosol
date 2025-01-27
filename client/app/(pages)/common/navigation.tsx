import React, { useState } from 'react';
import Link from 'next/link';
import frame2 from '../../../public/images/right.svg';
import Image from 'next/image';
import './../blog/style/style.css'
function Navigation() {
  const menu = ['All', 'Mega Kitchen', 'Cloud Kitchen', 'QSR,Cafe', 'Casual', 'Bar,Launge'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === menu.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <div className="category_section_box">
        {menu.map((item, i) => (
          <div className={`${i === currentIndex ? 'select' : 'category'}`} key={i}>
            <Link href="#"></Link>
            {item}
          </div>
        ))}
      </div>
      <div className="nav_arrow">
        <div className="category_more">
          <Image src={frame2} alt="Logo" width={12} height={12} onClick={goToNext} />
        </div>
      </div>
    </>
  );
}

export default Navigation;
