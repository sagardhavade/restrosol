/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import img from '@/public/images/Imagess.svg';
import imglogo from '@/public/images/Iconn.svg';
import './style/style.css';
import Founder from '../aboutus/founder';
import Meet_talent from './meet_talent';
import Link from 'next/link';
const Career = () => {
  return (
    <>
      <div className="section1400">
        <div className="career_component">
          <div className="career_section">
            <Image src={img} alt="Logo" width={859} height={457} />
            <div className="career_card">
              <div className="career_title">
                Working at <span style={{ color: '#CBBC87' }}>Restrosol</span>
              </div>
              <div className="career_paragraph">
                Join us in shaping the future of hospitality— be part of a dynamic team where your expertise will shape
                the future of hospitality.
              </div>
            </div>
          </div>
        </div>
        <div className="career_values">
          <div className="career_left_card">
            <div className="career_left_card_box">
              <div className="career_data">200+</div>
              <div className="career_value_title">Strategic</div>
              <div className="career_value_paragraph">Results-driven solutions that align with our clients.</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">97+</div>
              <div className="career_value_title">Collaborative</div>
              <div className="career_value_paragraph">Fostering strong partnerships with clients and stakeholders</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">34+</div>
              <div className="career_value_title">Impactful</div>
              <div className="career_value_paragraph">Unwavering commitment to quality, innovation, and integrity.</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">100+</div>
              <div className="career_value_title">Sustainability</div>
              <div className="career_value_paragraph">
                Commitment to integrate eco-friendly practices, resource efficiency, and ethical operations.
              </div>
            </div>
          </div>
          <div className="career_right_card">
            <div className="career_right_title">Principles That Define Restrosol</div>
            <div className="career_right_paragraph">
              Our principles emphasize client-centred solutions, strategic insight, and operational precision to drive
              success in the hospitality industry.
            </div>
          </div>
        </div>
        <div className="job_opening">
          <div className="job_opening_title">Under Job openings</div>
          <div className="job_opening_paragraph" style={{ color: '#b3b3b3', textAlign: 'center', margin: '20px 20%' }}>
            At Restrosol, we build a vibrant culture that promotes self-expression and dedication. Join Our Team and
            shape the world where your dreams can take flight.
          </div>
          <div className="job_card">
            <div className="job_section">
              <div>
                <div className="relationship_title">Relationship Manager</div>
                <div className="relationship_category">
                  <div className="category_location">Location: India</div>
                  <div className="category_location">Department: Retail Banking</div>
                </div>
                <div>
                  <div className="about_job">About This Job</div>
                  <div className="job_opening_paragraph">
                    As a Relationship Manager at Restrosol, you will be responsible for developing and maintaining
                    relationships with our valued customers. You will proactively identify their financial needs and
                    offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent
                    communication skills, a strong sales acumen, and a passion for delivering exceptional customer
                    service.
                  </div>
                </div>
                <div className="requirements_card">
                  <div className="about_job">Requirements & Qualifications</div>
                  <div className="job_opening_paragraph">
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Bachelor's degree in Business, Finance, or a related field
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Minimum of 3 years of experience in sales or relationship management in the banking industry
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Proven track record of meeting and exceeding sales targets
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Excellent interpersonal and negotiation skills
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Strong knowledge of banking products and services
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply">
                <Link className="apply_link" href="#">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="job_section">
              <div>
                <div className="relationship_title">Relationship Manager</div>
                <div className="relationship_category">
                  <div className="category_location">Location: India</div>
                  <div className="category_location">Department: Retail Banking</div>
                </div>
                <div>
                  <div className="about_job">About This Job</div>
                  <div className="job_opening_paragraph">
                    As a Relationship Manager at Restrosol, you will be responsible for developing and maintaining
                    relationships with our valued customers. You will proactively identify their financial needs and
                    offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent
                    communication skills, a strong sales acumen, and a passion for delivering exceptional customer
                    service.
                  </div>
                </div>
                <div className="requirements_card">
                  <div className="about_job">Requirements & Qualifications</div>
                  <div className="job_opening_paragraph">
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Bachelor's degree in Business, Finance, or a related field
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Minimum of 3 years of experience in sales or relationship management in the banking industry
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Proven track record of meeting and exceeding sales targets
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Excellent interpersonal and negotiation skills
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Strong knowledge of banking products and services
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply">
                <Link className="apply_link" href="#">
                  View All
                </Link>
              </div>
            </div>
            <div className="job_section">
              <div>
                <div className="relationship_title">Relationship Manager</div>
                <div className="relationship_category">
                  <div className="category_location">Location: India</div>
                  <div className="category_location">Department: Retail Banking</div>
                </div>
                <div>
                  <div className="about_job">About This Job</div>
                  <div className="job_opening_paragraph">
                    As a Relationship Manager at Restrosol, you will be responsible for developing and maintaining
                    relationships with our valued customers. You will proactively identify their financial needs and
                    offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent
                    communication skills, a strong sales acumen, and a passion for delivering exceptional customer
                    service.
                  </div>
                </div>
                <div className="requirements_card">
                  <div className="about_job">Requirements & Qualifications</div>
                  <div className="job_opening_paragraph">
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Bachelor's degree in Business, Finance, or a related field
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Minimum of 3 years of experience in sales or relationship management in the banking industry
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Proven track record of meeting and exceeding sales targets
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Excellent interpersonal and negotiation skills
                    </div>
                    <div className="job_logo">
                      <Image src={imglogo} alt="Logo" width={20} height={20} />
                      Strong knowledge of banking products and services
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply">
                <Link className="apply_link" href="#">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="quiry_text">
          Thinking of a bright beginning or boost in hospitality? Let Restrosol be your perfect launchpad. :)
        </div>
        <Meet_talent />
        <Founder />
        <div className="quiry">
          “People will forget what you said, forget what you did, but people will never forget how you made them feel.”
          – Maya Angelou :)
        </div>
      </div>
    </>
  );
};

export default Career;
