import React from 'react';
import Image from 'next/image';
import img1 from '@/public/images/about-home.png';
import '../career/style/style.css';
function Founder() {
  return (
    <div className="career_image">
      <div className="career_image_card">
        <Image src={img1} alt="Logo" style={{width:"848px",height:"606px", flexShrink:0}}  />
      </div>
      <div className="career_image_text">
        <div className="career_founder_prefix">Founder’s Message</div>
        <div className="career_founder">Our Guiding Vision  </div>
        <div className="career_founder_paragraph">
          At Restrosol, we are passionate about transforming the food and beverage industry, an area often
          characterized by its disorganization and chaos. Our mission is to foster a new generation of organized
          entrepreneurs who can navigate this sector with clarity and confidence. With a strong foundation in
          hospitality management, our team offers unparalleled expertise to both established restaurants and those
          embarking on new ventures. Since our inception in early 2020, we have dedicated ourselves to providing
          comprehensive consultancy services that cover every aspect of restaurant operations. Whether you are launching
          a new restaurant or seeking to optimize an existing one, we are here to guide you through the essentials,
          offering valuable insights and education on industry best practices. At Restrosol, we believe in empowering
          our clients with the knowledge and tools they need to succeed and excel in the dynamic world of hospitality.
        </div>
      </div>
    </div>
  );
}

export default Founder;
