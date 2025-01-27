import React from 'react';
import Clients_details from '../common/clients_details';

function Record_section() {
  return (
    <>
      <div className="record_section">
        <div className="record_box">
          <div>
            <div className="record_data">200+</div>
            <div className="record_details">Clients Served</div>
            <div className="record_paragraph">
            Over 200+ hospitality businesses transformed through our expert consulting.            
            </div>
          </div>
          <div>
            <div className="record_data">80+</div>
            <div className="record_details">Cities</div>
            <div className="record_paragraph">
            We have successfully served clients in over 80+ cities across major urban hubs.
            </div>
          </div>
          <div>
            <div className="record_data">50+</div>
            <div className="record_details">Restaurant Stablished</div>
            <div className="record_paragraph">
            Over 50+ successful restaurant establishments, transforming culinary visions into thriving businesses
            </div>
          </div>
          <div>
            <div className="record_data">60+</div>
            <div className="record_details">Service provided</div>
            <div className="record_paragraph">
            Delivered 60+ services to hospitality businesses optimizing operations through strategic consulting.
            </div>
          </div>
        </div>
        <div className="record_clients_card">
          <Clients_details />
        </div>
      </div>
    </>
  );
}

export default Record_section;
