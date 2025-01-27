import React from 'react';
import Clients_details from '../../common/clients_details';
import './style/style.css';
import Link from 'next/link';
import frame from '@/public/images/bg.png';
import Image from 'next/image';
import left_arrow from '@/public/images/left-chevron.svg';
import comment from '@/public/images/Vector3.svg';
import comments from '@/public/images/Groupss.svg';
import view from '@/public/images/user.svg';
import share from '@/public/images/share.svg';
import calender from '@/public/images/calendar1.svg';
import frame3 from '@/public/images/Image.svg';
import Comments from './comments';
function details() {
  return (
    <>
      <div className="section1400">
        <div className="blogs_redirection">
          <Link href="/blog" className="blogs_previous">
            <Image src={left_arrow} alt="Logo" width={20} height={20} />
            &nbsp; Back to Blogs
          </Link>
          <div className="blogs_top_title">How Can a Restaurant Consultant Help Improve Menu Development?</div>
        </div>
        <div className="blogs_banner">
          <Image src={frame} alt="Logo" width={1440} height={500} />
          <div className="share">
            <div className="share_box">
              <div className="updated_date">
                <Image src={calender} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Apr 8, 2023
              </div>
              <div className="comments">
                <Image src={comments} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;6 Comments
              </div>
              <div className="view">
                <Image src={view} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;45 Views
              </div>
            </div>
            <Link href="#" className="share-button">
              <div className="share_icon">
                <Image src={share} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Share
              </div>
            </Link>
          </div>
        </div>
        <div className="details_section">
          <div className="details_title">Restaurant Building Process for Beginners</div>
          <div className="details_paragraph_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </div>
          <div className="details_paragraph_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum
          </div>

          <div className="details_card">
            <div>
              <div className="details_title_card">Just greatest Article in the world</div>
              <div className="details_paragraph_card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat
              </div>
            </div>
            <div>
              <div className="details_title_card">Just greatest Article in the world</div>
              <div className="details_paragraph_card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details_title">Step for Beginners</div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </div>
          </div>
          <div className="about_section_card2">
            <Clients_details />
          </div>
          <div className="details">
            <div className="details_title">Design Process for Beginners</div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
          <div className="comment_share">
            <Link href="#comments" className="share-button">
              <div className="share_icon">
                <Image src={comment} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Comments
              </div>
            </Link>
            <Link href="#" className="share-button">
              <div className="share_icon">
                <Image src={share} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Share
              </div>
            </Link>
          </div>
          <div className="blogs_underline"></div>
          <div className="blogs_latest_section">
            <div className="blogs_latest_article">Related articles</div>
          </div>
          <div className="blogs_underline"></div>
          <div className="blogs_card_container">
            {[1, 2, 3].map((item, i) => (
              <Link
                href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?"
                className="image_category_card"
                key={i}
              >
                <div className="image_category_img">
                  <Image src={frame3} alt="Logo" width={66} height={66} />
                </div>
                <div className="image_category_text">
                  <div className="image_title">How Can a Restaurant Consultant Help Improve Menu Development?</div>
                  <div className="image_paragraph">
                    Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                  </div>
                  <div className="bottom_line"></div>
                  <div className="category_bottom">
                    <div className="category_blog">Category</div>
                    <div className="category_blog">Jan 22, 2024</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="blogs_latest_section" id="comments">
            <div className="blogs_latest_article">Comments</div>
            <div className="comments_underline"></div>
            <Comments />
          </div>
        </div>
        <div className="quiry">Hello! If you have some questions, then you can just write an email to us ;)</div>
      </div>
      ;
    </>
  );
}

export default details;
