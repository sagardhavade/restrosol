import React from 'react';
import Image from 'next/image';
import logo1 from '@/public/images/Frame 386.svg';
import logo from '@/public/images/Frame 38619.svg';
function Our_clients() {
  return (
    <>
      <div className="clients_section">
        <div className="clients_title ">
          What our <span style={{ color: '#cbbc87;' }}>clients</span> say
        </div>
        <div className="clients_paragraph">
          Restrosol is very much professional in Restaurant Consultancy. Their organisational structure is full of
          hospitality professionals for Restaurant Setup Service. They do amazing kitchen Planning, Interior Design and
          Menu Planning. They are dedicated towards their commitment. I would really recommend them as best restaurant
          consultant in India.
        </div>
        <div className="client_border_line"></div>
        <div>
          <div className="client_bottom_line"></div>
        </div>
        <div className="client_details">
          <div className="client_user_details">
            <Image src={logo} alt="Logo" width={48} height={48} />
            <div>
              <div className="client_user_name">AJIT KUMAR SAHOO</div>
              <div className="client_user_profile">Chief Culinary Director</div>
            </div>
          </div>
          <div className="client_user_details">
            <Image src={logo1} alt="Logo" width={48} height={48} />
            <div>
              <div className="client_user_name">Gaurav Sharma</div>
              <div className="client_user_profile">Operational Director</div>
            </div>
          </div>
          <div className="client_user_details">
            <Image src={logo} alt="Logo" width={48} height={48} />
            <div>
              <div className="client_user_name">AJIT KUMAR SAHOO</div>
              <div className="client_user_profile">Chief Culinary Director</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Our_clients;
