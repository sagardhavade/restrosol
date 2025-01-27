import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/Vector4.svg';
import logo1 from '../../../public/images/Icon_logo.svg';
function Price_plan() {
  return (
    <div className="price_plan">
      <div className="price_box">
        <div className="price_data">
          <Image src={logo1} alt="Logo" width={40} height={40} />
          <div className="price_title">Essential</div>
        </div>
        <div className="price">For - ₹ 99/sqft</div>
        <div className="price_seat">
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
        </div>
        <div className="price_dot_line"></div>
        <div className="final_price">
          ₹1 Lakh <span className="final_price_list">per project</span>
        </div>
        <div className="Choose_link">
          <Link href="#" className="price_Choose_link">
            Choose
          </Link>
        </div>
      </div>
      <div className="price_box">
        <div className="price_data">
          <Image src={logo1} alt="Logo" width={40} height={40}/>
          <div className="price_title">Enhanced</div>
        </div>
        <div className="price">For - ₹ 99/sqft</div>
        <div className="price_seat">
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
        </div>
        <div className="price_dot_line"></div>
        <div className="final_price">
          ₹1 Lakh <span className="final_price_list">per project</span>
        </div>
        <div className="Choose_link">
          <Link href="#" className="price_Choose_link">
            Choose
          </Link>
        </div>
      </div>
      <div className="price_box">
        <div className="price_data">
          <Image src={logo1} alt="Logo" width={40} height={40}/>
          <div className="price_title">Elite</div>
        </div>
        <div className="price">For - ₹ 99/sqft</div>
        <div className="price_seat">
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
          <p>
            <span className="price_icon">
              <Image src={logo} alt="Logo" width={24} height={24} className="icons" />
            </span>
            &nbsp;Kitchen Planning
          </p>
        </div>
        <div className="price_dot_line"></div>
        <div className="final_price">
          ₹1 Lakh <span className="final_price_list">per project</span>
        </div>
        <div className="Choose_link">
          <Link href="#" className="price_Choose_link">
            Choose
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Price_plan;
