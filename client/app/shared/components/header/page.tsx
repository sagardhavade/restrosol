'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png';
import './style.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import dropdown from '@/public/images/Chevron down.svg';
import Popup from '@/app/(pages)/common/modal';
function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const pathname = usePathname();
  return (
    <>
      <div className="header">
        <div className="nav">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={141} height={72} />
          </Link>
          <nav>
            <ul>
              <li className={pathname === '/' ? 'active' : ''}>
                <Link href="/">Home</Link>
              </li>
              <li className={pathname === '/aboutus' ? 'active' : ''}>
                <Link href="/aboutus">About</Link>
              </li>
              <div className="dropdown">
                <li className={pathname === '/service' ? 'active' : ''}>
                  <Link href="/service">Service</Link>
                </li>
                <Image src={dropdown} width={15} height={15} alt="logo" />
              </div>
              <li className={pathname === '/gallery' ? 'active' : ''}>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className={pathname === '/blog' ? 'active' : ''}>
                <Link href="/blog">Blogs</Link>
              </li>
              <li className={pathname === '/career' ? 'active' : ''}>
                <Link href="/career">Career</Link>
              </li>
            </ul>
            <div className="header_right_button">
              <div id="triggerDiv" onClick={togglePopup}>Get in touch &#8594;</div>
            </div>
             <Popup show={showPopup} onClose={togglePopup} />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
