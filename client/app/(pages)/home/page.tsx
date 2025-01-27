import React from 'react';
import Excited from '../common/faq_excited';
import View_all from '../common/view_all';
import All_platform from './all_platform';
import Blogs_Card from './blogs_card';
import Faq from './faq';
import Glimse from './glimse_section';
import Help_you from './help_you';
import Our_clients from './our_clients';
import Own_buisness from './own_buisness';
import Price_plan from './price_plan';
import Record_section from './record_section';
import Top_section from './top_section';
function Home() {
  return (
    <>
      <Top_section />
      <Record_section />
      <All_platform />
      <Price_plan />
      <Help_you />
      <Own_buisness />
      <div className="glimse_section">
        <Glimse />
        <View_all />
      </div>
      <Our_clients />
      <Blogs_Card />
      <Faq />
      <Excited />
    </>
  );
}

export default Home;
