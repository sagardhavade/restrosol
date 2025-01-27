import React from 'react';
import Link from 'next/link';
import help1 from '@/public/images/help1.png';
import help2 from '@/public/images/help2.png';
import Image from 'next/image';
import logo from '@/public/images/Vectors_logo.svg';
import logo1 from '@/public/images/Dashed Line.svg';
function Help_you() {
  return (
    <div className="main_section">
      <div className="title_card">
        How we can <span style={{ color: '#cbbc87' }}>help</span> you?
      </div>
      <div className="image_card_section">
        <div className="image_container">
          <div className="left_content">
            <div className="left_content_title">Comprehensive- Plan</div>
            <div className="left_content_paragraph">
              Comprehensive plan encompasses several key components. It begins with a market analysis to understand
              target demographics and competitors, followed by a business strategy that defines the model, goals, and
              competitive edge. The operational plan details daily operations, staffing, and service standards, while
              the financial plan covers budgeting, projections, and funding needs.
            </div>
            <Link href="#" className="left_link_started">
              Get Started &#8594;
            </Link>
          </div>
          <div className="right_content">
            <Image src={help1} alt="Logo" width={555} height={379} />
            <div className="image_text_banner">
              <div className="image_text_banner_price">Plan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45$</div>
              <div className="image_text_banner_price">Analyse &nbsp;&nbsp;75$</div>
              <div className="image_text_banner_price">Execute &nbsp;&nbsp;15$</div>
            </div>
          </div>
        </div>
        <div className="dashed_line">
          <Image src={logo1} alt="Logo" width={626} height={208} />
        </div>
        <div className="image_container">
          <div className="right_content">
            <Image src={help2} alt="Logo" width={555} height={379} />
            <div className="image_text_banner_right">
              <Image src={logo} alt="Logo" width={32} height={28} />
              <div className="logo_number">1</div>
            </div>
          </div>
          <div>
            <div className="left_content_title">Strategic-Analysis</div>
            <div className="left_content_paragraph">
              Strategic Analysis involves evaluating market trends, competitor performance, and internal operations to
              develop actionable insights and strategies. This analysis aims to enhance decision-making, improve service
              offerings, and drive long-term growth by identifying opportunities and addressing challenges within the
              industry.
            </div>
            <Link href="#" className="left_link_started">
              Get Started &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help_you;
