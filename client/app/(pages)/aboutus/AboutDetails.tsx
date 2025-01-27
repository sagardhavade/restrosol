import React from 'react';
import Clients_details from './Clients_details';
import Excited from '../common/faq_excited';
import Our_clients from '../home/our_clients';
import Image from 'next/image';
import frame from '@/public/images/about-home.png';
import C1 from '@/public/images/about-client1.png';
import C2 from '@/public/images/about-client2.png';
import './style/style.css';
import Founder from './founder';
import Meet_talent from '../career/meet_talent';
import Mission_vision from './mission_vision';
import Awards from './awards';
function AboutDetails() {

  return (
    <>
      <div className="about_section">
        <div className="top_card">
          <div className="about_left_card">
            <div className="about">About Us</div>
            <div className="about_title">
              Unmatched hospitality <span style={{ color: '#CBBC87' }}>mastery</span>
            </div>
            <div className="about_paragraph">
              Restrosol brings you insightful consulting for growth and empowering hospitality businesses to thrive.
              Your “Prosperity”, Our “Strategy”
            </div>
          </div>
          <div className="about_right_image_card">
            <Image src={frame} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="about_section_card_1">
        <Clients_details
        img={C1}
        title="Who we are "
        subtitle="Experts With Insights"
        description="Launched in November 2018 by Chef Ajit Kumar Sahoo and Chandra Jyoti, Restrosol was founded with a mission to positively impact the food and hospitality industry. This commitment has remained steadfast over the past two years. Our dedicated team has consistently delivered strategic guidance, tactical support, and operational expertise to a wide range of national clients, all through a client-focused approach. Our comprehensive restaurant consulting services encompass a wide array of solutions. We are equipped to handle every aspect, from minor details to major events, ensuring the success of your restaurant."
        
        />
      </div>
      <div className="about_section_card_2">
      <Clients_details
      img={C2}
    title="What we do"
    subtitle="Upgrade Brand Experience"
    description="Restrosol was founded to revolutionize the hospitality industry by introducing innovative concepts and providing top-tier consulting services. As one of the leading restaurants branding firms, we are committed to delivering exceptional quality. We offer customized service packages designed to your budget, ensuring that every aspiring or existing business owner can achieve their dream of owning or operating a restaurant. Our designs, whether for small or large establishments, are backed by expert advice. With a proven track record of successful projects that have become prominent brands, we stand out in the industry. Unlike traditional franchise models that impose hefty fees, our restaurant marketing strategies alleviate the burden and help you navigate challenges without incurring additional costs."
  />
      </div>
      <div className="values_section">
        <div className="values_top_card">
          <div className="about">Our Values</div>
          <div className="values_title">Our Beliefs</div>
          <div className="values_paragraph">
          Values we follow
          </div>
        </div>
        <div className="values_bottom_card">
          <div className="values_card">
            <div className="values_number">01</div>
            <div className="values_card_title">Flexibility</div>
            <div className="values_paragraph">
            Adaptive Business Models that Respond to Market Changes with Agility and Resilience.
            </div>
          </div>
          <div className="values_card">
            <div className="values_number">02</div>
            <div className="values_card_title">Customer-Centric </div>
            <div className="values_paragraph">
            Focused on Delivering Exceptional Customer Experiences that Build Loyalty and Drive Repeat Business
            </div>
          </div>
          <div className="values_card">
            <div className="values_number">03</div>
            <div className="values_card_title">Consistency</div>
            <div className="values_paragraph">
            Standardized Processes Ensuring Uniform Quality and Service Across All Locations.
            </div>
          </div>
          <div className="values_card">
            <div className="values_number">04</div>
            <div className="values_card_title">Innovation</div>
            <div className="values_paragraph">
            Continuous Improvement through Creative Solutions that Keep Your Business Ahead of Trends.
            </div>
          </div>
        </div>
      </div>
      <Mission_vision />
      <Meet_talent />
      <Founder />
      <Awards />
      <Our_clients />
      <Excited />
    </>
  );
}

export default AboutDetails;
