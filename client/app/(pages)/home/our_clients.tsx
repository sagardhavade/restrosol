"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '@/public/images/Frame 386.svg';
import logo from '@/public/images/Frame 38619.svg';
import { getClientTestomonials } from '@/app/api/clientTestomonial/pageApi';
type Client = {
  id: string;
  name: string;
  destination: string;
  image: string;
  message:string;
};

function Our_clients() {

  const [content, setContent] = useState<Client[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getClientTestomonials();
        console.log(data);
        // const clientsData: Client[] = await response.json(); // Ensure the API returns an array
        setContent(data);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="clients_section">
        <div className="clients_title ">
          What our <span style={{ color: '#cbbc87' }}>clients</span> say
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
        {content.map((client) => (
        <div key={client.id} className="client_user_details">
          <Image src={client.image} alt={client.name} width={48} height={48} />
          <div>
            <div className='client_user_profile'>{client.message} </div>
            <div className="client_user_name">{client.name}</div>
            <div className="client_user_profile">{client.destination}</div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </>
  );
}

export default Our_clients;
