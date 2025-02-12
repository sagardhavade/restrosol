// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Excited from '../common/faq_excited';
// import Link from 'next/link';
// import Image from 'next/image';
// import frame3 from '../../../public/images/Image.svg';
// import s_logo from '../../../public/images/ri_search-line.svg';
// import './style/style.css';
// import View_all from '../common/view_all';
// import Navigation from '../common/navigation';
// // function blogPost() {
//   const blogPost = ()=> {
//   const [query, setQuery] = useState('');
//   const router = useRouter();

//   const handleInputChange = (e: any) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     router.push(`/search?query=${query}`);
//   };
  

//   return (
//     <>
//       <div className="blogs">
//         <div className="blogs_main_title">Blogs</div>
//         <div className="blogs_top">
//           <div className="blog_top_left">
//             <div className="blogs_top_title">Explore Our Blogs</div>
//             <div className="blogs_top_paragrapgh">
//             Exploring recent trends and insights in Hospitality. 
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="blogs_search">
//             <div className="search">
//               <Image src={s_logo} alt="Logo" width={15} height={15} />
//             </div>
//             <input type="text" value={query} onChange={handleInputChange} placeholder="Search....." />
//             {/* <button type="submit">Search</button> */}
//           </form>
//         </div>
//       </div>
//       <div className="blogs_features">
//         <div className="blogs_feature_title">Featured Articles</div>
//         <div className="blogs_feature_paragraph">
//         Valuable insights and remarkable stories that make a difference. 
//         </div>
//         <Link href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?"  className="blogs_feature_image">
//           <div className="blogs_feature_image_card">
//             <Image src={frame3} alt="Logo" width={66} height={66} />
//           </div>
//           <div className="blogs_feature_right_card">
//             <div className="blogs_feature_right_title">
//               How Can a Restaurant Consultant Help Improve Menu Development?
//             </div>
//             <div className="blogs_feature_right_paragraph">
//               Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
//               neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
//               aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
//               phasellus mollis sit aliquam sit nullam neque ultrices.
//             </div>
//             <div className="blogs_bottom_line"></div>
//             <div className="blogs_feature_right_bottom_card">
//               <div className="blogs_feature_category">Category</div>
//               <div className="blogs_feature_category_updated">Jan 24, 2024</div>
//             </div>
//           </div>
//         </Link>
//       </div>
//       <div className="blogs_latest">
//         <div className="blogs_latest_article">Latest articles</div>
//         <div className="blogs_category_card">
//           <Navigation/>
//         </div>
//       </div>
//       <div className="blogs_underline"></div>
//       <div className="image_card_container">
//         {[1,2,3,4,,5,6].map((item,i)=>(
//         <Link href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?" className="image_category_card" key={i}>
//           <div className="image_category_img">
//             <Image src={frame3} alt="Logo" width={66} height={66} />
//           </div>
//           <div className="image_category_text">
//             <div className="image_title">How Can a Restaurant Consultant Help Improve Menu Development?</div>
//             <div className="image_paragraph">
//               Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
//             </div>
//             <div className="bottom_line"></div>
//             <div className="category_bottom">
//               <div className="category_blog">Category</div>
//               <div className="category_blog">Jan 22, 2024</div>
//             </div>
//           </div>
//         </Link>))}
//       </div>
//       <View_all />
//       <Excited />
//     </>
//   );
// }

// export default blogPost;


'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Excited from '../common/faq_excited';
import Link from 'next/link';
import Image from 'next/image';
import frame3 from '../../../public/images/Image.svg';
import s_logo from '../../../public/images/ri_search-line.svg';
import './style/style.css';
import View_all from '../common/view_all';
import Navigation from '../common/navigation';

const BlogPost = () => { // Renamed to BlogPost
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <div className="blogs">
        <div className="blogs_main_title">Blogs</div>
        <div className="blogs_top">
          <div className="blog_top_left">
            <div className="blogs_top_title">Explore Our Blogs</div>
            <div className="blogs_top_paragrapgh">
              Exploring recent trends and insights in Hospitality.
            </div>
          </div>
          <form onSubmit={handleSubmit} className="blogs_search">
            <div className="search">
              <Image src={s_logo} alt="Logo" width={15} height={15} />
            </div>
            <input type="text" value={query} onChange={handleInputChange} placeholder="Search....." />
          </form>
        </div>
      </div>
      <div className="blogs_features">
        <div className="blogs_feature_title">Featured Articles</div>
        <div className="blogs_feature_paragraph">
          Valuable insights and remarkable stories that make a difference.
        </div>
        <Link href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?" className="blogs_feature_image">
          <div className="blogs_feature_image_card">
            <Image src={frame3} alt="Logo" width={66} height={66} />
          </div>
          <div className="blogs_feature_right_card">
            <div className="blogs_feature_right_title">
              How Can a Restaurant Consultant Help Improve Menu Development?
            </div>
            <div className="blogs_feature_right_paragraph">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
              neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
              aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </div>
            <div className="blogs_bottom_line"></div>
            <div className="blogs_feature_right_bottom_card">
              <div className="blogs_feature_category">Category</div>
              <div className="blogs_feature_category_updated">Jan 24, 2024</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="blogs_latest">
        <div className="blogs_latest_article">Latest articles</div>
        <div className="blogs_category_card">
          <Navigation />
        </div>
      </div>
      <div className="blogs_underline"></div>
      <div className="image_card_container">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <Link href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?" className="image_category_card" key={i}>
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
      <View_all />
      <Excited />
    </>
  );
};

export default BlogPost; // Export the renamed component
