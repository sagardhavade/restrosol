"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '@/public/images/Imagess.svg';
import imglogo from '@/public/images/Iconn.svg';
import './style/style.css';
import Founder from '../aboutus/founder';
import Meet_talent from './meet_talent';
import Link from 'next/link';
import { getJobPosts } from '@/app/api/jobPost/jobpostApi';
interface JobPost {
  id: string;
  dateCreated: string;
  jobTitle: string;
  location: string;
  department: string;
  aboutThisJob: string;
  closingDate: string;
  requirements: string[];
}
const Career = () => {

  const [content, setContent] = useState<JobPost[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJobPosts(); // Assuming getJobPosts() fetches the data
        console.log("response", response);

        // Filter out jobs with a closing date greater than the current date
        const filteredContent = response.filter((job: JobPost) => {
          const closingDate = new Date(job.closingDate);
          const currentDate = new Date();
          return closingDate > currentDate;
        });

        setContent(filteredContent); // Set the filtered content
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="section1400">
        <div className="career_component">
          <div className="career_section">
            <Image src={img} alt="Logo" width={859} height={457} />
            <div className="career_card">
              <div className="career_title">
                Working at <span style={{ color: '#CBBC87' }}>Restrosol</span>
              </div>
              <div className="career_paragraph">
                Join us in shaping the future of hospitality— be part of a dynamic team where your expertise will shape
                the future of hospitality.
              </div>
            </div>
          </div>
        </div>
        <div className="career_values">
          <div className="career_left_card">
            <div className="career_left_card_box">
              <div className="career_data">200+</div>
              <div className="career_value_title">Strategic</div>
              <div className="career_value_paragraph">Results-driven solutions that align with our clients.</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">97+</div>
              <div className="career_value_title">Collaborative</div>
              <div className="career_value_paragraph">Fostering strong partnerships with clients and stakeholders</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">34+</div>
              <div className="career_value_title">Impactful</div>
              <div className="career_value_paragraph">Unwavering commitment to quality, innovation, and integrity.</div>
            </div>
            <div className="career_left_card_box">
              <div className="career_data">100+</div>
              <div className="career_value_title">Sustainability</div>
              <div className="career_value_paragraph">
                Commitment to integrate eco-friendly practices, resource efficiency, and ethical operations.
              </div>
            </div>
          </div>
          <div className="career_right_card">
            <div className="career_right_title">Principles That Define Restrosol</div>
            <div className="career_right_paragraph">
              Our principles emphasize client-centred solutions, strategic insight, and operational precision to drive
              success in the hospitality industry.
            </div>
          </div>
        </div>
        <div className="job_opening">
          <div className="job_opening_title">Under Job openings</div>
          <div className="job_opening_paragraph" style={{ color: '#b3b3b3', textAlign: 'center', margin: '20px 20%' }}>
            At Restrosol, we build a vibrant culture that promotes self-expression and dedication. Join Our Team and
            shape the world where your dreams can take flight.
          </div>
          <div className="job_card">
            {content.map((job) => (
              <div key={job.id} className="job_section">
                <div>
                  <div className="relationship_title">{job.jobTitle}</div>
                  <div className="relationship_category">
                    <div className="category_location">Location: {job.location}</div>
                    <div className="category_location">Department: {job.department}</div>
                  </div>
                  <div>
                    <div className="about_job">About This Job</div>
                    <div className="job_opening_paragraph">{job.aboutThisJob}</div>
                  </div>
                  <div className="requirements_card">
                    <div className="about_job">Requirements & Qualifications</div>
                    <div className="job_opening_paragraph">
                      {job.requirements.map((requirement, index) => (
                        <div key={index} className="job_logo">
                          <Image src={imglogo} alt="Logo" width={20} height={20} />
                          {requirement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="apply">
                  <Link className="apply_link" href="#">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="quiry_text">
          Thinking of a bright beginning or boost in hospitality? Let Restrosol be your perfect launchpad. :)
        </div>
        <Meet_talent />
        <Founder />
        <div className="quiry">
          “People will forget what you said, forget what you did, but people will never forget how you made them feel.”
          – Maya Angelou :)
        </div>
      </div>
    </>
  );
};

export default Career;
