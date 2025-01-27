'use client';
import React, { useState } from 'react';
import './style/style.css';
import Link from 'next/link';
import Image from 'next/image';
import logo3 from '@/public/images/Serivice (1).svg';
import logo6 from '@/public/images/Serivice (2).svg';
import logo5 from '@/public/images/Serivice (3).svg';
import logo4 from '@/public/images/Serivice (4).svg';
import logo2 from '@/public/images/Serivice5.svg';
import logo1 from '@/public/images/Serivice.svg';
function All_platform() {
  const [isVisible, setIsVisible] = useState(true);
  const [visible, setVisible] = useState(false);

  const showDiv = () => {
    setIsVisible(true);
    setVisible(false);
  };

  const hideDiv = () => {
    setIsVisible(false);
    setVisible(true);
  };

  return (
    <div className="all_in_section">
      <div className="all_in_title">A to Z Consultancy</div>
      <div className="all_in_paragraph">Service part is under modifications.</div>
      <div className="all_in_button">
        <div className={isVisible ? 'isactive' : ''} onClick={showDiv}>
          <div>Emerging Restaurant</div>
        </div>
        <div className={visible ? 'isactive' : ''} onClick={hideDiv}>
          <div>Existing Restaurant</div>
        </div>
      </div>
      <div>
        {isVisible && (
          <div id="div1" className="all_in_container">
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo1} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Site Analysis</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo2} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Kitchen Planning</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo3} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Interior Designing</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo4} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Menu Engineering</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo5} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Staff Hiring</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo6} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Training</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {visible && (
          <div id="div2" className="all_in_container">
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo1} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Site Analysis</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo2} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Kitchen Planning</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
            <div className="all_in_card">
              <div className="all_in_box">
                <div className="all_in_product">
                  <Image src={logo3} alt="Logo" width={30} height={30} />
                  <div className="all_in_product_name">Interior Designing</div>
                </div>
                <div className="all_in_product_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="all_in_bottom_line"></div>
                <div className="all_in_show">
                  <Link href="#" className="all_in_show_more">
                    Show More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="all_in_view_more">
          <Link href="#" className="all_in_view_more_link">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default All_platform;
