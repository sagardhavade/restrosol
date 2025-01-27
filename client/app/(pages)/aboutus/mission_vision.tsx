import React from 'react';
import './style/style.css';
import Image from 'next/image';
import frame from '@/public/images/Image (4).svg';
import frame2 from '@/public/images/Image (1).svg';
function Mission_vision() {
  return (
    <>
      <div className="top_mission_card">
        <div className="top_mission-vision_card">
          <div className="top-mission_section">
            <div className="mission-prefix">Mission & Vision</div>
            <div className="mission-title">Under mission and vision</div>
            <div className="mission_headline">
            Our mission is to elevate hospitality experiences while our vision is to lead the industry with integrity, creativity, and sustainable growth.
            </div>
          </div>
          <div className="mission_vision_card">
            <div className="mission_section">
              <div className="mission_image_card">
                <div className="mission_image">
                  <Image src={frame} alt="Logo" width={425} height={440} />
                </div>
              </div>
              <div className="mission_card_1">
                <div className="mission_title">Mission</div>
                <div className="mission_paragraph">
                Restrosol is committed to delivering unique, innovative solutions that enhance client profitability by maximizing returns on investment while minimizing operational costs and stress.
                </div>
              </div>
            </div>
            <div className="mission_section">
              <div className="mission_card_2">
                <div className="mission_title">Vision</div>
                <div className="mission_paragraph">
                To become the world`s foremost restaurant consulting firm, delivering innovative and distinctive concepts, exceptional food and beverage experiences, advanced operational strategies, targeted marketing solutions, and comprehensive employee training.
                </div>
              </div>
              <div className="mission_image_card">
                <div className="mission_image">
                  <Image src={frame2} alt="Logo" width={425} height={440} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission_vision;
