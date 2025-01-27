import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import brand1 from '@/public/images/Vector.svg';
import brand2 from '@/public/images/Group.svg';
import brand3 from '@/public/images/Group (1).svg';
import brand4 from '@/public/images/g3009.svg';
import brand5 from '@/public/images/Group 1.svg';
import frame from '@/public/images/Frame 244.png';
import ellipse from '@/public/images/Ellipse 2.svg';
function Top_section() {
  return (
    <>
      <div className="top_section">
        <div className="top_section_card">
          <div className="top_section_left_card">
            <div className="top_title">Restrosol for 3’s – Strategy, Solution, and Success</div>
            <div className="top_paragraph">
            Restrosol helps you build the most rewarding and engaging hospitality business.
            </div>
            <div className="top_section_button">
              <div className="top_section_left_button">
                <Link href="#">Existing </Link>
              </div>
              <div className="top_section_right_button">
                <Link href="#">Emerging</Link>
              </div>
            </div>
          </div>
          <div className="top_section_right_card">
            <Image src={frame} width={543} height={362} alt="logo" />
            <div className="image_banner">
            <Image src={ellipse} width={6} height={6} alt="logo" />
              <div className="image_banner_text">Restrosol</div>
            </div>
          </div>
        </div>
        <div className="top_section_brand">
          <Image src={brand1} width={83} height={31} alt="logo" />
          <Image src={brand2} width={177} height={30} alt="logo" />
          <Image src={brand3} width={131} height={30} alt="logo" />
          <Image src={brand4} width={95} height={26} alt="logo" />
          <Image src={brand5} width={194} height={30} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Top_section;
