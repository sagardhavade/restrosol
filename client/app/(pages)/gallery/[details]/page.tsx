import React from 'react';
import Excited from '../../common/faq_excited';
import './style/style.css';
import Image from 'next/image';
import frame from '@/public/images/Union.svg';
import frame1 from '@/public/images/Image.svg';
import frame_logo from '@/public/images/Union1.svg';
import logo from '@/public/images/Check circle.svg';
function Gallery_details() {
  return (
    <>
      <div className="section1400">
        <div className="top_card_section">
          <div className="top_card_title">Resto-Bar</div>
          <div className="prefix">Project</div>
          <div className="category_details_name">XYZ Brand</div>
          <div className="category_headline">
            The Restrosol ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels
            with ease using the Experts
          </div>
        </div>
        <div className="clients_details_card">
          <div>
            <div className="record_headline">Highly effective solutions</div>
            <div className="record_clients_paragraph">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
              neque ultrices.,{' '}
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
          <div className="record_clients_image">
            <Image src={frame1} alt="Logo" width={60} height={60} />
          </div>
        </div>
        <div className="image_card-box">
          <div className="image_card">
            <div className="image_card1">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
            <div className="image_card2">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
          </div>
          <div className="image_card">
            <div className="image_card2">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
            <div className="image_card1">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
          </div>
          <div className="image_card">
            <div className="image_card1">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
            <div className="image_card2">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
          </div>
          <div className="image_card">
            <div className="image_card2">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
            <div className="image_card1">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
          </div>
          <div className="image_card">
            <div className="image_card1">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
            <div className="image_card2">
              <Image src={frame_logo} alt="Logo" width={58} height={58} />
            </div>
          </div>
        </div>
        <div className="testimonial_section">
          <div className="testimonial_image_card">
            <div className="testimonial_image"></div>
            <div className="testimonial_image_border">
              <Image src={frame} alt="Logo" width={48} height={48} />
            </div>
          </div>
          <div className="testimonial_card">
            <div className="testimonial">Client Testimonials</div>
            <div className="testimonial_headline">
              “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
              effective way of establishing credibility and increasing your company's reputation. highly effective way
              of establishing credibility and increasing your company's reputatio highly effective way of establishing
              credibility and increasing your company's reputatio”
            </div>
            <div className="client_testimonial">
              <div className="testimonial_image_logo">
                <Image src={frame} alt="Logo" width={26} height={26} />
              </div>
              <div className="testimonial_name">Client Name</div>
            </div>
            <div className="testimonial_headline">
              “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
              effective way of establishing credibility and increasing your company's reputation.”
            </div>
            <div className="client_testimonial">
              <div className="testimonial_image_logo">
                <Image src={frame} alt="Logo" width={26} height={26} />
              </div>
              <div className="testimonial_name">Client Name</div>
            </div>
          </div>
        </div>
        <Excited />
      </div>
    </>
  );
}

export default Gallery_details;
