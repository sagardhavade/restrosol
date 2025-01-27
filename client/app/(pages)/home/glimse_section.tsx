import React from 'react';
import './style/style.css';
import image1 from '@/public/images/Rectangle 8.png';
import image2 from '@/public/images/Rectangle 9.png';
import image3 from '@/public/images/Rectangle 10.png';
import image4 from '@/public/images/Rectangle 11.png';
import image5 from '@/public/images/Rectangle 13.png';
import image6 from '@/public/images/Rectangle 12.png';
import image7 from '@/public/images/Rectangle 8.png';
import image8 from '@/public/images/Rectangle 9.png';
import image9 from '@/public/images/Rectangle 10.png';
import image10 from '@/public/images/Rectangle 11.png';
import Image from 'next/image';
function Glimse() {
  return (
    <>
      <div className="glimse_card">
        <div className="clients_title">
          Glimpse of our Client’s <span style={{ color: '#cbbc87' }}>Success </span>
        </div>
        <div className="glimse_paragraph">We provide visionary insights for daring leaders across a spectrum of subjects</div>
      </div>
      <div className="image_card">
        <div className="image_card_category">
          <Image src={image1} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image2} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image3} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image4} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image9} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
      </div>
      <div className="image_card">
        <div className="image_card_category">
          <Image src={image5} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image6} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image7} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image8} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
        <div className="image_card_category">
          <Image src={image10} alt="Logo" width={324} height={180} />
          <div className="category_section">
            <div className="category_name">Category</div>
            <div className="category_details">Resturant XYZ</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Glimse;
