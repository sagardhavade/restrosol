'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img from '@/public/images/Button Icon.svg';
import img1 from '@/public/images/Button Icon (1).svg';
function Meet_talent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  const slides=[1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="meet_container">
        <div className="meet_talent">
          <div className="meet_section">
            <div className="meet_title">Meet our talented team</div>
            <div className="meet_paragraph">
            The best choice results from a cohesive decision made by a unified team.
            </div>
          </div>
          <div className="meet_arrow_button">
            <Image src={img} alt="Logo" width={40} height={40} onClick={prevSlide} />
            <Image src={img1} alt="Logo" width={40} height={40} onClick={nextSlide} />
          </div>
        </div>

        <div className="meet_image">
          {slides.map((value, i) => (
            <div key={i}>
              <div
                className="meet_image_card_box"
                style={{
                  maxWidth: '100%',
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                <div className="meet_image_card">
                  <div className="meet_person">Ajit Kumar Sahoo</div>
                  <div className="meet_profile">Chief Culinary Director</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Meet_talent;
