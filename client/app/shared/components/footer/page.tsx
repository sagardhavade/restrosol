import React from 'react';
import Logo from '../../../../public/images/logo.png';
import fb from '/public/images/Facebook.svg';
import youtube from '/public/images/YouTube.svg';
import twitter from '/public/images/Twitter.svg';
import instagram from '/public/images/Instagram.svg';
import linkdin from '/public/images/LinkedIn.svg';
import phone from '/public/images/Phone.svg';
import email from '/public/images/Icon.svg';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <Image src={Logo} alt="Logo" width={141} height={72} />
          <p className="footer_paragraph">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
          <div className="social_icon">
            <Image src={fb} alt="Logo" width={24} height={24} />
            <Image src={twitter} alt="Logo" width={24} height={24} />
            <Image src={instagram} alt="Logo" width={24} height={24} />
            <Image src={linkdin} alt="Logo" width={24} height={24} />
            <Image src={youtube} alt="Logo" width={24} height={24} />
          </div>
        </div>
        <div className="footer_section">
          <div className="footer_title">About us</div>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="/contact_us">Contact Us</Link>
            </li>
          </ol>
        </div>
        <div className="footer_section">
          <div className="footer_title">Existing</div>
          <ol>
            <li>
              <Link href="#">Web design</Link>
            </li>
            <li>
              <Link href="#">Web development</Link>
            </li>
            <li>
              <Link href="#">Mobile design</Link>
            </li>
            <li>
              <Link href="#">UI/UX design</Link>
            </li>
            <li>
              <Link href="#" className="view_all">
                View All
              </Link>
            </li>
          </ol>
        </div>
        <div className="footer_section">
          <div className="footer_title">New</div>
          <ol>
            <li>
              <Link href="#">Site Analysis</Link>
            </li>
            <li>
              <Link href="#">Kitchen Planning</Link>
            </li>
            <li>
              <Link href="#">Interior Designing</Link>
            </li>
            <li>
              <Link href="#">Menu Engineering</Link>
            </li>
            <li>
              <Link href="#" className="view_all">
                View All
              </Link>
            </li>
          </ol>
        </div>
        <div className="footer_section">
          <div className="footer_title">Contact us</div>
          <div className="contact_details">
            <Image src={email} alt="Logo" width={48} height={48} />
            <div>
              <div className="contact">Email:</div>
              <div className="details">contact@restrosol.com</div>
            </div>
          </div>
          <div className="contact_details">
            <Image src={phone} alt="Logo" width={48} height={48} />
            <div>
              <div className="contact">Phone:</div>
              <div className="details">(123)687-5892</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_line"></div>
      <div className="footer_rights">
        <p className="copy_right"> © 2021 Restrosol India &nbsp; </p>
        <p className="copy_right">All rights reserved &nbsp; </p>
        <span className="copy_right_condition">
          <Link href="#">Terms and conditions &nbsp;&nbsp; </Link>
          <Link href="#">&nbsp;&nbsp;&nbsp;Privacy Policy </Link>
          <Link href="/dashboard/authentication/login">&nbsp;&nbsp;&nbsp;Admin Login</Link>
        </span>
      </div>
    </>
  );
}

export default Footer;
