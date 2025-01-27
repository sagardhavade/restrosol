/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style/style.css';
import Image from 'next/image';
import frame1 from '@/public/images/Image (1).png';
import frame from '@/public/images/Image.png';
import frame2 from '@/public/images/Image (2).png';
import frame3 from '@/public/images/Image3.png';
import Link from 'next/link';
function Awards() {
  return (
    <>
      <div className="top_award_section">
        <div className="top_mission-vision_card">
          <div className="top-mission_section">
            <div className="mission-prefix">Achievements</div>
            <div className="mission-title">Awards & Honors </div>
            <div className="award_headline">
              Stay updated with the latest happenings and exciting developments at Restrosol through our press releases.
            </div>
          </div>
          <div className="award_section">
            <Link href="#" className="award_card">
              <div className="award_image">
                <Image src={frame} alt="Logo" width={582} height={277} />
              </div>
              <div className="award_box">
                <div className="award_title">
                Caz Brain Business Awards Trends on Twitter Hosted by Bangalore's HSR Club ----dailyhunt
                </div>
                <div className="award_updated">
                  <div className="mission_paragraph">Location: India</div>
                  <div className="mission_paragraph">Date: 06/11/2024</div>
                </div>
                <div className="mission_paragraph">
                The event was powered by House of Delici, Rvieo, GMS Aviation Training Institute, Propartyghar & New Arch Studio. The awards were presented in several categories, including innovation, growth, sustainability, and social responsibility. Restrosol Hospitality & Friends Pvt Ltd has been named the Emerging Start-up of Year. The event was graced by the presence of esteemed chief guests, Hon'ble M. Satish Reddy MLA and Praful Billore founder MBA Chaiwala. 
                </div>
              </div>
            </Link>
            <Link href="" className="award_card">
              <div className="award_image">
                <Image src={frame1} alt="Logo" width={582} height={277} />
              </div>
              <div className="award_box">
                <div className="award_title">
                Caz Brain Business Awards Acknowledge Achievements of Leading Industry Players  ---UP18News
                </div>
                <div className="award_updated">
                  <div className="mission_paragraph">Location: India</div>
                  <div className="mission_paragraph">Date: 12/11/2024</div>
                </div>
                <div className="mission_paragraph">
                The CAZ Brain Business Excellence Awards proved to be a grand success, and the winner’s deserved appreciation for their exceptional performance in the MSME sector. Restrosol Hospitality & Friends Pvt Ltd has been named the Emerging Start-up of Year. The event served as a testament to the vital role played by small businesses in driving India’s economic growth and prosperity.
                </div>
              </div>
            </Link>
            <Link href="" className="award_card">
              <div className="award_image">
                <Image src={frame2} alt="Logo" width={582} height={277} />
              </div>
              <div className="award_box">
                <div className="award_title">
                Leading Industry Players on 19th Feb at The HSR Club, Bangalore. Trends #5 on twitter ---Rajasthan mirror
                </div>
                <div className="award_updated">
                  <div className="mission_paragraph">Location: India</div>
                  <div className="mission_paragraph">Date: 24/12/2024</div>
                </div>
                <div className="mission_paragraph">
                	Outstanding success and recognition of exceptional MSMEs in India at The CAZ Brain Business Excellence Awards held on February 19th, 2023 at The HSR Club in Bangalore. The event was trending top 5 on Twitter, highlighting the enthusiasm and appreciation among the public for the exceptional businesses that were celebrated at the ceremony.  Restrosol Hospitality & Friends Pvt Ltd has been named the Emerging Start-up of Year.
                </div>
              </div>
            </Link>
            <Link href="" className="award_card">
              <div className="award_image">
                <Image src={frame3} alt="Logo" width={582} height={277} />
              </div>
              <div className="award_box">
                <div className="award_title">
                  Restrosol India Launches Sustainable Building Initiative to Promote Environmental Responsibility
                </div>
                <div className="award_updated">
                  <div className="mission_paragraph">Location: India</div>
                  <div className="mission_paragraph">Date: 28/12/2024</div>
                </div>
                <div className="mission_paragraph">
                  Restrosol India is excited to unveil our new Sustainable Banking Initiative, demonstrating our
                  commitment to environmental responsibility. This initiative includes a range of sustainable banking
                  products and services, such as green loans, eco-friendly investment options, and paperless banking
                  solutions. By incorporating sustainable practices into our operations, we aim to contribute to a
                  greener future while providing innovative banking solutions to our customers.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
