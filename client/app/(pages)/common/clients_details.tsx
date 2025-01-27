import React from 'react';
import Image from 'next/image';
import frame from '@/public/images/home-about.png';
import logo from '@/public/images/Check circle.svg';
import '../home/style/style.css';
function Clients_details() {
  return (
    <>
      <div className="record_clients_image">
        <Image src={frame} alt="Logo" width={564} height={558} />
      </div>
      <div style={{width:"800px"}}>
        <div className="record_title">Whom we Serve?</div>
        <div className="record_headline">we cater to</div>
        <div className="record_clients_paragraph">
        Definition-We are India’s one of the Best Bar and Restaurant consultants providing end-to-end restaurant consulting services. Restrosol is also known for food service industry experts which provides planned techniques and guidance and serves a high-quality service to retrieve your business and achieve long-run success for you.
        </div>
        <div className="record_description">
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Newcomers – Individuals or groups looking to start their first restaurant, bar, hotel, lounge, or café.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Existing Businesses – Established businesses seeking to launch new ventures or improve their current operations.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Hotels – Hotel owners or managers requiring consulting for their food and beverage services.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Lounges – Businesses planning to open or optimize lounges.
          </p>
          <p>
            <span>
              <Image src={logo} alt="Logo" width={16} height={16} className="icon" />
            </span>
            &nbsp;Food Service Industry – Businesses within the food service industry seeking expert guidance to improve quality and profitability.
          </p>
        </div>
      </div>
    </>
  );
}

export default Clients_details;
