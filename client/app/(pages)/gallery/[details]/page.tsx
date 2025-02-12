"use client"
import React from 'react';
import Excited from '../../common/faq_excited';
import './style/style.css';
import Image from 'next/image';
import frame from '@/public/images/Union.svg';
import frame1 from '@/public/images/Image.svg';
import frame_logo from '@/public/images/Union1.svg';
import logo from '@/public/images/Check circle.svg';
import { useState, useEffect } from 'react';
import { getGallary } from '@/app/api/gallary/pageApi';
import { useSearchParams } from 'next/navigation'
import CheckIcon from "@mui/icons-material/Check"; // Import MUI Check Icon

function Gallery_details() {

  const searchParams = useSearchParams()
  const id = searchParams.get('id'); // Retrieve the 'id' query parameter from the URL
  console.log('Product ID:', id);  // Log the ID to verify

  const [content, setContent] = useState({
    brandName: '',
    category: '',
    brandDescription: '',
    description: '',
    clientDescription: '',
  });
  const [points, setPoints] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [clientName, setClientName] = useState<string[]>([]);
  const [clientImage, setClientImage] = useState<string[]>([]);
  const [clientSectionImage, setClientSectionImage] = useState<string[]>([]);
  const [sectionImage, setSectionImage] = useState<string[]>([]);

  
  // useEffect with an empty dependency array to ensure the fetchGallary function runs only once
  useEffect(() => {

    const fetchGallary = async () => {
      try {
        const fetchData = await getGallary(); // Replace with your actual fetch function
        console.log(fetchData);
  
        if (id) {
          const matchedItem = fetchData.find((item: any) => item.id === id); // Find the item by id
          console.log("didsf", matchedItem);
          if (matchedItem) {
            setContent({
              category: matchedItem.category || '',
              brandName: matchedItem.brandName || '',
              brandDescription: matchedItem.brandDescription || '',
              description: matchedItem.description || '',
              clientDescription: matchedItem.clientDescription || '',
            });
            setPoints(matchedItem.points || []);
            setImages(matchedItem.images || []);
            setClientName(matchedItem.clientName || []);
            setClientImage(matchedItem.clientImage || []);
            setSectionImage(matchedItem.sectionImage || []);
            setClientSectionImage(matchedItem.clientSectionImage || []);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchGallary(); // Call the fetch function once on mount
  }, []); // Empty array ensures it ru
  return (
    <>
      <div className="section1400">
        <div className="top_card_section">
          <div className="top_card_title">{content.category}</div>
          <div className="prefix">Project</div>
          <div className="category_details_name">{content.brandName}</div>
          <div className="category_headline">{content.brandDescription}
          </div>
        </div>
        <div className="clients_details_card">
          <div>
            <div className="record_headline">Highly effective solutions</div>
            <div className="record_clients_paragraph">
              {content.description}{' '}
            </div>
            <div className="record_description">
              <div className="record_description">
                {points.map((point, index) => (
                  <p key={index}>
                    <span>
                      <CheckIcon fontSize="small" className="icon" /> {/* MUI Tick Mark */}
                    </span>
                    &nbsp;{point}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="record_clients_image">
            <Image src={sectionImage[0]} alt="Logo" width={1200} height={555} />
          </div>
        </div>
        {/* <div className="image_card-box">
          {images.map((image, index) => (
            <div className="image_card" key={index}>
              <div className={index % 2 === 0 ? "image_card1" : "image_card2"}>
                <Image src={image} alt={`image-${index}`} width={580} height={250} />
              </div>
            </div>
          ))}
        </div> */}
        <div className="image_card-box" style={{ display: "flex", flexWrap: "wrap", gap: "100px", justifyContent: "center" }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "580px",
                transform: index % 2 !== 0 ? "translateY(50px)" : "translateY(0)",
              }}
            >
              <Image src={image} alt={`image-${index}`} width={580} height={250} />
            </div>
          ))}
        </div>

        <div className="testimonial_section">
          <div className="testimonial_image_card">
            <div className="testimonial_image"></div>
            <div className="testimonial_image_border">
              <Image src={clientImage[0]} alt="Logo" width={480} height={440} />
            </div>
          </div>
          <div className="testimonial_card">
            <div className="testimonial">Client Testimonials</div>
            <div className="testimonial_headline">
              {content.clientDescription}
            </div>
            <div className="testimonial_headline">
              “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
              effective way of establishing credibility and increasing your company&apos;s reputation.”
            </div>
            {/* <div className="client_testimonial">
              <div className="testimonial_image_logo">
                <Image src={frame} alt="Logo" width={26} height={26} />
              </div>
              <div className="testimonial_name">Client Name</div>
            </div>
            
            <div className="client_testimonial">
              <div className="testimonial_image_logo">
                <Image src={frame} alt="Logo" width={26} height={26} />
              </div>
              <div className="testimonial_name">Client Name</div>
            </div> */}
            {clientName.map((client, index) => (
              <div key={index} className="client_testimonial">
                <div className="testimonial_image_logo">
                  <Image src={clientImage[index]} alt="Logo" width={26} height={26} />
                </div>

                <div className="testimonial_name ">{clientName[index]}</div>
              </div>
            ))}
          </div>
        </div>
        <Excited />
      </div>
    </>
  );
}

export default Gallery_details;
