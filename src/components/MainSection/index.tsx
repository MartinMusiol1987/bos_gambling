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
          
          {/* Right column with image and text */}
          <div className="flex flex-col justify-end">
            <img
              src={mainImage}
              alt="Wallet connected to shield illustration representing safer gambling"
              className="w-[485px] object-contain"
            />
            <h3 className="font-roboto text-[24px] font-bold leading-[32px] text-gray-700 mt-12"
                style={{ 
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}>
              Download Our Tailored Briefing Notes
            </h3>
            <p className="font-roboto text-[16px] font-normal leading-[25px] text-[#4B5563] mt-6 w-[485px]"
               style={{ 
                 textUnderlinePosition: 'from-font',
                 textDecorationSkipInk: 'none'
               }}>
              Download our tailored briefing notes today to learn how this collaborative venture can get you ahead of the curve, and keep you there.
            </p>
          </div>
        </div>

        <Dropdowns />
      </div>
    </section>
  );
}