'use client';
import React from 'react';
import Image from 'next/image';
import image from '../../../public/images/Image_Wrapper.svg';
import image1 from '@/public/images/Image_Wrapper (1).svg';
import image3 from '@/public/images/Image_Wrapper (3).svg';
import image4 from '@/public/images/Image_Wrapper (4).svg';
import logo from '@/public/images/Frame 38619.svg';
import './style/style.css';
import Link from 'next/link';
function Blogs_Card() {
  return (
    <div className="blogs_section">
      <div className="blogs_title">Blogs From Restrosol</div>
      <p className="blogs_paragraph">Exploring recent trends and insights in Hospitality</p>
      <div className="image_card">
        <div className="left_card">
          <Image src={image} alt="Logo" width={638} height={365} />
          <div className="bottom_text_card">
            <div className="headling">How to Choose the Right Restaurant Business Concept</div>
            <p className="image_card_paragraph">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
              neque ultrices....<span style={{ fontWeight: 800, color: '#909090' }}>Read More...</span>
            </p>
            <div className="image_card">
              <div className="bottom_user_details">
                <Image src={logo} alt="Logo" width={32} height={32} />
                <div>Chandra Jyoti</div>
              </div>
              <div>
                <div>Jan 16,2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_card">
          <div className="right_image_card">
            <Image src={image1} alt="Logo" width={208} height={194} />
            <div className="right_headline_box">
              <div className="right_headline">How to Choose the Right Restaurant Business Concept</div>
              <div className='right_bottom_line'></div>
              <div className="right_image_card">
                <div className="bottom_user_details">
                  <Image src={logo} alt="Logo" width={16} height={16} />
                  <div>Chandra Jyoti</div>
                </div>
                <div>
                  <div>Jan 22,2024</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_image_card">
            <Image src={image3} alt="Logo" width={208} height={194} />
            <div className="right_headline_box">
              <div className="right_headline">How to Choose the Right Restaurant Business Concept</div>
              <div className='right_bottom_line'></div>
              <div className="right_image_card">
                <div className="bottom_user_details">
                  <Image src={logo} alt="Logo" width={16} height={16} />
                  <div>Chandra Jyoti</div>
                </div>
                <div>
                  <div>Jan 22,2024</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_image_card">
            <Image src={image4} alt="Logo" width={208} height={194} />
            <div className="right_headline_box">
              <div className="right_headline">How to Choose the Right Restaurant Business Concept</div>
              <div className='right_bottom_line'></div>
              <div className="right_image_card">
                <div className="bottom_user_details">
                  <Image src={logo} alt="Logo" width={16} height={16} />
                  <div>Chandra Jyoti</div>
                </div>
                <div>
                  <div>Jan 22,2024</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='view_more'>
        <Link href="/blog/How to Choose the Right Restaurant Business Concept" className='view_more_link'>View All</Link>
      </div>
    </div>
  );
}

export default Blogs_Card;
