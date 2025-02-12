import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './style/style.css';
import Logo from '@/public/images/logo.png';
import fb from '@/public/images/Vector-f.svg';
import Image from 'next/image';
import instagram from '@/public/images/Vector (1).svg';
import phone from '@/public/images/Vector (2).svg';
import email from '@/public/images/Vector (3).svg';
import location from '@/public/images/Group-l.svg';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { addContact } from '@/lib/features/contactSlice';
import { getInTouch } from '@/app/api/GetInTouch/pageApi';

interface PopupProps {
  show: boolean;
  onClose: () => void;
}


const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.contacts);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    const sendMessages = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      type: 'contact',
      status: 'resolve',
      date: new Date().toISOString(),
    };

    // dispatch(
    //   addContact({
    //     payload: sendMessages,
    //     onSuccess: (data: any) => {
    //       console.log('Success callback:', data);
    //       toast.success('Message sent successfully');
    //       setFormData({
    //         name: '',
    //         email: '',
    //         message: '',
    //       });
    //     },
    //     onFailure: (error: any) => {
    //       console.error('Error callback:', error);
    //       toast.error('Failed to send message. Please try again.');
    //     },
    //   })
    // );

    try {
      // Call the API with the sendMessages data
      const response = await getInTouch(sendMessages);
      console.log('API response:', response);

      toast.success('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message to API:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="pop-up_section">
          <div className="pop-up">
            <div className="pop-up_logo">
              <div className="logo">
                <Image src={Logo} alt="Logo" width={164} height={83} />
                <p className="pop-up_paragraph">Trust and Accountability</p>
                <div className="social">
                  <Image src={instagram} alt="Instagram" width={18} height={18} />
                  <Image src={fb} alt="Facebook" width={20} height={20} />
                </div>
              </div>
              <div>
                <div className="pop-up_title">Contact us</div>
                <div className="pop-up_contact_details">
                  <Image src={location} alt="Location" width={16} height={20} />
                  <div className="pop-up-details">2715 Ash Church Street, Bangalore - 560018</div>
                </div>
                <div className="pop-up_contact_details">
                  <Image src={phone} alt="Phone" width={18} height={18} />
                  <div className="pop-up-details">(219) 555-0114</div>
                </div>
                <div className="pop-up_contact_details">
                  <Image src={email} alt="Email" width={22} height={16} />
                  <div className="pop-up-details">info@restrosol.com</div>
                </div>
              </div>
            </div>
            <div className="pop-up_form">
              <div className="pop-up_title">Get in touch</div>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="submit_button" onClick={handleSubmit} style={{ opacity: loading ? 0.5 : 1 }}>
                {loading ? <CircularProgress size={24} /> : 'send '}
              </div>
            </div>
          </div>
        </div>
        <div className="pop-up_line"></div>
        <div className="pop-up_text">©2024 Restrosol India, All rights reserved</div>
      </div>
    </div>
  );
};

export default Popup;
