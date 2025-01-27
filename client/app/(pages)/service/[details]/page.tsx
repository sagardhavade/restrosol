'use client';
import React from 'react';
import Excited from '../../common/faq_excited';
import Glimse from '../../home/glimse_section';
import Our_clients from '../../home/our_clients';
import './style/style.css';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/images/content.png';
import Navigation from '../../common/navigation';
import logo from '@/public/images/Check circle.svg';
import logo1 from '@/public/images/Vector 19.svg';
import logo2 from '@/public/images/Vector 19 (1).svg';
import logo3 from '@/public/images/Vector 20.svg';
import logo4 from '@/public/images/Vector 21.svg';
import logo5 from '@/public/images/Vector 22.svg';
import frame from '@/public/images/Title.svg';
import frame1 from '@/public/images/Title (1).svg';
import frame2 from '@/public/images/Title (2).svg';
import frame3 from '@/public/images/Title (3).svg';
import frame4 from '@/public/images/Title (4).svg';
import frame5 from '@/public/images/Title (5).svg';
function Detail() {
  return (
    <div className="section1400">
      <div className="top_details_card">
        <div className="nav_bar">
          <Link href="/service">Service &gt;</Link>
          <Link href="#"> &nbsp;XYZ Service</Link>
        </div>
        <div className="top_card_title">Emerging</div>
        <div className="title">Kitchen Planning</div>
        <div className="details_paragraph">
          The Restrosol ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels
          with ease using the Experts The Restrosol ecosystem is designed to help you generate profit. Set up complete
          sales and marketing funnels with ease using the Experts The Restrosol ecosystem is designed to help you
          generate profit. Set up complete sales and marketing funnels with ease using the Experts The Restrosol
          ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using
          the Experts
        </div>
        <div className="banner">
          <Image src={banner} alt="Logo" width={1106} height={550} />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
      </div>
      <div style={{ background: '#fff' }}>
        <div className="underline"></div>
        <div className="top_details_card">
          <div className="record_details_card_box">
            <div className="record_details_image ">
              <Image src={frame} alt="Logo" width={376} height={350} />
            </div>
            <div className="record_details_card">
              <div className="record_title">Kitchen</div>
              <div className="record_headline">We’re Your Dreams Creater</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
          </div>
          <div className="dash_line1">
            <Image src={logo1} alt="Logo" width={679} height={400} />
          </div>
          <div className="record_details_card_box">
            <div className="record_details_card">
              <div className="record_title">Interior</div>
              <div className="record_headline">We Creates Your Dream</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
            <div className="record_details_image ">
              <Image src={frame1} alt="Logo" width={170} height={350} />
            </div>
          </div>
          <div className="dash_line2">
            <Image src={logo2} alt="Logo" width={726} height={400} />
          </div>
          <div className="record_details_card_box ">
            <div className="record_details_image ">
              <Image src={frame2} alt="Logo" width={478} height={350} />
            </div>
            <div className="record_details_card">
              <div className="record_title">Menu</div>
              <div className="record_headline">We’re Your Dreams Creater</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
          </div>
          <div className="dash_line3">
            <Image src={logo3} alt="Logo" width={266} height={401} />
          </div>
          <div className="record_details_card_box">
            <div className="record_details_card">
              <div className="record_title">Vendor</div>
              <div className="record_headline">We Creates Your Dream</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
            <div className="record_details_image ">
              <Image src={frame3} alt="Logo" width={383} height={350} />
            </div>
          </div>
          <div className="dash_line4">
            <Image src={logo4} alt="Logo" width={686} height={400} />
          </div>
          <div className="record_details_card_box">
            <div className="record_details_image ">
              <Image src={frame4} alt="Logo" width={403} height={350} />
            </div>
            <div className="record_details_card">
              <div className="record_title">Hiring</div>
              <div className="record_headline">We’re Your Dreams Creater</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
          </div>
          <div className="dash_line5">
            <Image src={logo5} alt="Logo" width={449} height={400} />
          </div>
          <div className="record_details_card_box">
            <div className="record_details_card">
              <div className="record_title">Training</div>
              <div className="record_headline">We Creates Your Dream</div>
              <div className="record_clients_paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
                aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing
                eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </div>
              <div className="record_description">
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design websites that look amazing.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We develop fast, perfectly responsive websites.
                </p>
                <p>
                  <span>
                    <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
                  </span>
                  &nbsp;We design intuitive web & mobile apps.
                </p>
              </div>
            </div>
            <div className="record_details_image ">
              <Image src={frame5} alt="Logo" width={318} height={350} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_title">Existing Restaurant</div>
      <div className="glimse_section">
        <Glimse />
      </div>
      <Our_clients />
      <Excited />
    </div>
  );
}

export default Detail;
