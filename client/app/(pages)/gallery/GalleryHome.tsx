'use client';
import React, { useState, useEffect } from 'react';
import Excited from '../common/faq_excited';
import './style/style.css';
import Image from 'next/image';
import Link from 'next/link';
import frame2 from '../../../public/images/right.svg';
import frame3 from '../../../public/images/Image.svg';
import View_all from '../common/view_all';
import { getGallary } from '@/app/api/gallary/pageApi';
const menu = ['All', 'Mega Kitchen', 'Cloud Kitchen', 'QSR,Cafe', 'Casual', 'Bar,Launge'];

interface gallary {
  id: string[],
  sectionImage: string,
  brandName: string[],
  brandDescription: string[],
  category: string; // Add category field for Domestic or International
}
function GalleryHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [galleryData, setGalleryData] = useState<gallary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState<gallary[]>([]); // State to hold filtered data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGallary(); // Assuming `getGallary` is your API call function
        setGalleryData(response); // Set the API response in the state
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        // setError();
        setLoading(false); // Set loading to false if there was an error
      }
    };
    fetchData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run only once when component mounts



  // const showDiv = () => {
  //   setIsVisible(true);
  //   setVisible(false);
  // };

  // const hideDiv = () => {
  //   setIsVisible(false);
  //   setVisible(true);
  // };

  const showDiv = () => {
    setIsVisible(true);
    setVisible(false);
    // Filter for Domestic category
    setFilteredData(galleryData.filter(item => item.category === 'Domestic'));
  };

  const hideDiv = () => {
    setIsVisible(false);
    setVisible(true);
    // Filter for International category
    setFilteredData(galleryData.filter(item => item.category === 'international'));
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
            {filteredData.map((item, index) => (
              // <Link href={`/gallery/id=${item.id}`} className="image_category_card" key={index}>
              <Link key={index}  href={{ pathname: '/gallery/Gallery_details/', query: { id: item.id } }} passHref>

                <div className="image_category_img">
                  <Image src={item.sectionImage[0] || frame3} alt="Logo" width={200} height={200} />
                </div>
                <div className="image_category_text">
                  <div className="image_title">{item.brandName}</div>
                  <div className="image_paragraph">{item.brandDescription}</div>
                  <Link href="#" className="learn_more">
                    Learn more &#8594;
                  </Link>
                </div>
              </Link>
            ))}
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
            {filteredData.map((item, index) => (
              // <Link href={`/gallery/${item.id}`} className="image_category_card" key={index}>
              <Link key={index} href={{ pathname: '/gallery/Gallery_details/', query: { id: item.id } }} passHref>
                <div className="image_category_img">
                  <Image src={item.sectionImage[0] || frame3} alt="Logo" width={200} height={200} />
                </div>
                <div className="image_category_text">
                  <div className="image_title">{item.brandName}</div>
                  <div className="image_paragraph">{item.brandDescription}</div>
                  <Link href="#" className="learn_more">
                    Learn more &#8594;
                  </Link>
                </div>
              </Link>
            ))}
          </div>
          <View_all />
        </div>
      )}
      <Excited />
    </>
  );
}

export default GalleryHome;
