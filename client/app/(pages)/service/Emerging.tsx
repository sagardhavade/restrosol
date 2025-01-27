import React from 'react';
import Price_plan from '../home/price_plan';
import './style/style.css';
import Link from 'next/link';
import Image from 'next/image';
import logo3 from '@/public/images/Serivice (1).svg';
import logo6 from '@/public/images/Serivice (2).svg';
import logo5 from '@/public/images/Serivice (3).svg';
import logo4 from '@/public/images/Serivice (4).svg';
import logo2 from '@/public/images/Serivice5.svg';
import logo1 from '@/public/images/Serivice.svg';
import logo10 from '@/public/images/Serivice (8).svg';
import logo8 from '@/public/images/Serivice 4.svg';
import logo11 from '@/public/images/Serivice 2.svg';
import logo12 from '@/public/images/Serivice3.svg';
import logo13 from '@/public/images/Serivice (5).svg';
import logo9 from '@/public/images/Serivice55.svg';
function Emerging() {
  return (
    <div className="emerging_container">
      <div className="title" id="emerging">
        Emerging Restaurant
      </div>
      <div className="paragraph">You take care of the video quality and we take care of everything else</div>
      <div className="list_container">
        <div className="all_in_container">
          <Link href="/service/site_analysis" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo1} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Site Analysis</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/kitchen_planning" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo2} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Kitchen Planning</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/interior_designing" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo3} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Interior Designing</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/menu_engineering" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo4} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Menu Engineering</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/staff_hiring" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo5} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Staff Hiring</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/training" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo6} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Training</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/sop_checklist" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo9} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">SOP & Checklist</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/it_solution" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo8} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">IT Solutions</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="emerging_title">Add-Ons</div>
      <div className="list_container">
        <div className="all_in_container">
          <Link href="/service/recipe_development" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo10} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Recipe Development</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/logo_design" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo11} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Logo Designing</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/branding" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo12} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Branding</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/package_design" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo13} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Package Design</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/service/marketing" className="all_in_card">
            <div className="all_in_box">
              <div className="all_in_product">
                <Image src={logo8} alt="Logo" width={30} height={30} />
                <div className="all_in_product_name">Marketing</div>
              </div>
              <div className="all_in_product_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="all_in_bottom_line"></div>
              <div className="all_in_show">
                <Link href="#" className="all_in_show_more">
                  Show More
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Price_plan />
      </div>
    </div>
  );
}

export default Emerging;
