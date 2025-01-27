import React from 'react';
import Image from 'next/image';

interface CustomIconProps {
  src: any;
  alt: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ src, alt }) => {
  return (
    <span style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '8px' }}>
      <Image src={src} alt={alt} width={24} height={24} />
    </span>
  );
};

export default CustomIcon;
