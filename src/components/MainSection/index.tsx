import React from 'react';
import Header from './Header';
import Content from './Content';
import Dropdowns from './Dropdowns';
import mainImage from '../../assets/images/s300_Gambling_white_paper_upscaled.jpg';

export default function MainSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-24">
        <Header />
        
        <div className="flex justify-between items-start mt-12">
          {/* Left column with text content */}
          <div>
            <Content />
          </div>
          
          {/* Right column with image */}
          <div className="flex justify-end mt-0">
            <img
              src={mainImage}
              alt="Wallet connected to shield illustration representing safer gambling"
              className="w-[485px] object-contain"
            />
          </div>
        </div>

        <Dropdowns />
      </div>
    </section>
  );
}