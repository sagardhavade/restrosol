'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '@/lib/features/contactSlice';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import phone from '@/public/images/bxs_phone-call.svg';
import email from '@/public/images/ic_sharp-email.svg';
import location from '@/public/images/carbon_location-filled.svg';
import insta from '@/public/images/Group 1000001750.svg';
import thread from '@/public/images/Group 1000001751.svg';
import twiter from '@/public/images/Group 1000001749.svg';
import ellipse from '@/public/images/Ellipse 794.svg';
import ellipse2 from '@/public/images/Ellipse 793.svg';
import CircularProgress from '@mui/material/CircularProgress';

const ContactPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.contacts);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    useremail: '',
    userphonenumber: '',
    usermessage: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = {
      name: `${formData.firstname} ${formData.lastname}`,
      email: formData.useremail,
      phone: formData.userphonenumber,
      message: formData.usermessage,
      type: 'general',
      status: 'resolve',
      date: new Date().toISOString(),
    };

    dispatch(
      addContact({
        payload: newContact,
        onSuccess: (data: any) => {
          console.log('Success callback:', data);
          toast.success('Message sent successfully');
          setFormData({
            firstname: '',
            lastname: '',
            useremail: '',
            userphonenumber: '',
            usermessage: '',
          });
        },
        onFailure: (error: any) => {
          console.error('Error callback:', error);
          toast.error('Failed to send message. Please try again.');
        },
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-us_card">
      <div className="contact-us_section">
        <div className="contact-us">
          <div className="contact-us_title">Contact Information</div>
          <div className="contact-us_headline">Say something to start a live chat!</div>
          <div className="contact-us_details">
            <Image src={phone} alt="Phone" width={24} height={24} />
            <div className="contact-us_details_text">+1012 3456 789</div>
          </div>
          <div className="contact-us_details">
            <Image src={email} alt="Email" width={24} height={24} />
            <div className="contact-us_details_text">connect@restrosol.com</div>
          </div>
          <div className="contact-us_details">
            <Image src={location} alt="Location" width={24} height={24} />
            <div className="contact-us_details_text">132 Church Street, Bangalore, India 123456 India</div>
          </div>
          <div className="ellipse_logo">
            <Image src={ellipse} alt="Ellipse" width={138} height={138} />
            <div className="ellipse_logo2">
              <Image src={ellipse2} alt="Ellipse" width={269} height={269} />
            </div>
          </div>
          <div className="contact-us_sharing">
            <Image src={twiter} alt="Twitter" width={30} height={30} />
            <Image src={insta} alt="Instagram" width={30} height={30} />
            <Image src={thread} alt="Threads" width={30} height={30} />
          </div>
        </div>
        <div className="contact_login_form">
          <form onSubmit={handleSubmit}>
            <div className="login_card">
              <div className="login_form">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login_form">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="login_card">
              <div className="login_form">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="useremail"
                  value={formData.useremail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login_form">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="userphonenumber"
                  value={formData.userphonenumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="select_subject">
              Select Subject?
              <div className="radio_button">
                <input type="radio" value="General Inquiry 1" name="subject" /> General Inquiry 1
                <input type="radio" value="General Inquiry 2" name="subject" /> General Inquiry 2
                <input type="radio" value="General Inquiry 3" name="subject" /> General Inquiry 3
                <input type="radio" value="General Inquiry 4" name="subject" /> General Inquiry 4
              </div>
            </div>
            <div className="write_message">
              <label>Message</label>
              <input
                type="text"
                placeholder="Write your message.."
                name="usermessage"
                value={formData.usermessage}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="send_message">
              {loading ? <CircularProgress size={24} /> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
