import React from 'react';
import calender1 from '@/public/images/calendar.svg';
import view1 from '@/public/images/account.svg';
import load from '@/public/images/sync.svg';
import Image from 'next/image';
function Comments() {
  return (
    <>
      <div className="comments_card">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <div className="comments_box" key={i}>
            <div className="comments_updated">
              <div className="comments_date">
                <Image src={calender1} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Apr 8, 2023
              </div>
              <div className="comments_name">
                <Image src={view1} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Viacheslav M.
              </div>
            </div>
            <div className="comments_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in{' '}
            </div>
          </div>
        ))}
        <div className='load_more'>
        <Image src={load} alt="Logo" width={20} height={20} />&nbsp;&nbsp; Load More</div>
      </div>
    </>
  );
}

export default Comments;
