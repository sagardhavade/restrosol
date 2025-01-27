import React from 'react';
import Image, { StaticImageData } from 'next/image';
import frame from '@/public/images/about-home.png';
import '../home/style/style.css';

interface ClientsDetailsProps {
  img: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
}

const ClientsDetails: React.FC<ClientsDetailsProps> = ({ img, title, subtitle, description }) => {
  return (
    <>
      <div className="record_clients_image">
        <Image src={img} alt="Logo" />
      </div>
      <div style={{ width: "800px" }}>
        <div className="record_title">{title}</div>
        <div className="record_headline">{subtitle}</div>
        <div className="record_clients_paragraph">
          {description}
        </div>
      </div>
    </>
  );
};

export default ClientsDetails;
