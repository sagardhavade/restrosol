import React from 'react';
import Link from 'next/link';
import '../home/style/style.css'
function View_all() {
  return (
    <div className="all_in_view_more">
      <Link href="/gallery" className="all_in_view_more_link">
        View All
      </Link>
    </div>
  );
}

export default View_all;
