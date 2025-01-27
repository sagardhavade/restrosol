'use client';
import React, { useState } from 'react';
import Excited from '../common/faq_excited';
import './style/style.css';
import Image from 'next/image';
import Link from 'next/link';
import frame2 from '../../../public/images/right.svg';
import frame3 from '../../../public/images/Image.svg';
import View_all from '../common/view_all';
const menu = ['All', 'Mega Kitchen', 'Cloud Kitchen', 'QSR,Cafe', 'Casual', 'Bar,Launge'];
function GalleryHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showDiv = () => {
    setIsVisible(true);
    setVisible(false);
  };

  const hideDiv = () => {
    setIsVisible(false);
    setVisible(true);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === menu.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="top_section">
        <div>
          <div className="top_section_title">Glimpses of our clients we worked for</div>
          <div className="top_section_paragraph">
          An overview of the diverse clients we have collaborated with, both locally and globally.
          </div>
        </div>
        <div className="top_resturant_section">
          <div className={isVisible ? 'isactived' : ''} onClick={showDiv}>
            <div className="top_toggle_section">Domestic</div>
          </div>

          <div className={visible ? 'isactived' : ''} onClick={hideDiv}>
            <div className="top_toggle_section">Internatinal</div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div id="div1" className="bottom_container">
          <div className="category_card">
            <div className="category_section_box">
              {menu.map((item, i) => (
                <div className={`${i === currentIndex ? 'select' : 'category'}`} key={i}>
                  <Link href="#"></Link>
                  {item}
                </div>
              ))}
            </div>
            <div className="nav_arrow">
              <div className="category_more">
                <Image src={frame2} alt="Logo" width={12} height={12} onClick={goToNext} />
              </div>
            </div>
          </div>
          <div className="image_card_container">
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
          </div>
          <View_all />
        </div>
      )}
      {visible && (
        <div id="div2" className="bottom_container">
          <div className="category_card">
            <div className="category_section_box">
              {menu.slice(0, 5).map((item, i) => (
                <div className={`${i === currentIndex ? 'select' : 'category'}`} key={i}>
                  <Link href="#"></Link>
                  {item}
                </div>
              ))}
            </div>
            <div className="nav_arrow">
              <div className="category_more">
                <Image src={frame2} alt="Logo" width={12} height={12} onClick={goToNext} />
              </div>
            </div>
          </div>
          <div className="image_card_container">
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
            <Link href="/gallery/rest1" className="image_category_card">
              <div className="image_category_img">
                <Image src={frame3} alt="Logo" width={66} height={66} />
              </div>
              <div className="image_category_text">
                <div className="image_title">Rest 1</div>
                <div className="image_paragraph">
                  Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                </div>
                <Link href="#" className="learn_more">
                  Learn more &#8594;
                </Link>
              </div>
            </Link>
          </div>
          <View_all />
        </div>
      )}
      <Excited />
    </>
  );
}

export default GalleryHome;
