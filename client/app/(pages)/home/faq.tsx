'use client';
import React, { useState } from 'react';
import './style/style.css';
function Faq() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);
  return (
    <>
      <div className="frequently_asked">
        <div className="title">
          Frequently Asked <span style={{ color: "#cbbc87" }}>Questions</span>
        </div>
        <div className="paragraph_text">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
        </div>
        <div className="filter_question">
          <div className="filter_question_box">
            <div className="filter-option-heading">
              <div className="filter-option-content">
                <div>01</div>
                <div>How long does a Restaurant Building project take?</div>
              </div>
              <div className='arrow_pointer' onClick={() => setContent1(!content1)}>{content1 ? "x" : "+"}</div>
            </div>
            {content1 && (
              <p className="filtertitle">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel
                lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
              </p>
            )}
          </div>
          <div className="filter_question_box">
            <div className="filter-option-heading">
              <div className="filter-option-content">
                <div>02</div>
                <div>What factors affect the cost of Kitchen planning?</div>
              </div>
              <div className='arrow_pointer' onClick={() => setContent2(!content2)}>{content2 ? "x" : "+"}</div>
            </div>
            {content2 && (
              <p className="filtertitle">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel
                lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
              </p>
            )}
          </div>
          <div className="filter_question_box">
            <div className="filter-option-heading">
              <div className="filter-option-content">
                <div>03</div>
                <div>Do you provide ongoing support?</div>
              </div>
              <div className='arrow_pointer' onClick={() => setContent3(!content3)}>{content3 ? "x" : "+"}</div>
            </div>
            {content3 && (
              <p className="filtertitle">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel
                lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
              </p>
            )}
          </div>
          <div className="filter_question_box">
            <div className="filter-option-heading">
              <div className="filter-option-content">
                <div>04</div>
                <div>What is your Menu Engineering?</div>
              </div>
              <div className='arrow_pointer' onClick={() => setContent4(!content4)}>{content4 ? "x" : "+"}</div>
            </div>
            {content4 && (
              <p className="filtertitle">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel
                lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
