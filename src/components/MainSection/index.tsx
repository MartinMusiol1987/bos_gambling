import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import { MarketDropdown, RoleDropdown } from './Dropdowns';
import mainImage from '../../assets/images/s300_Gambling_white_paper_upscaled.jpg';

export default function MainSection() {
  const [market, setMarket] = useState('');
  const [role, setRole] = useState('');

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-24">
        <Header />
        
        <div className="flex justify-between items-start mt-12">
          {/* Left column with text content */}
          <div>
            <Content />
          </div>
          
          {/* Right column with image, text, and dropdowns */}
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
            <p className="font-roboto text-[16px] font-semibold leading-[18.75px] text-gray-700 mt-8"
               style={{ 
                 textUnderlinePosition: 'from-font',
                 textDecorationSkipInk: 'none'
               }}>
              Which Market are you in?
            </p>
            <div className="mt-4">
              <MarketDropdown value={market} onChange={setMarket} />
            </div>
            <p className="font-roboto text-[16px] font-semibold leading-[18.75px] text-gray-700 mt-8"
               style={{ 
                 textUnderlinePosition: 'from-font',
                 textDecorationSkipInk: 'none'
               }}>
              What role are you in?
            </p>
            <div className="mt-4">
              <RoleDropdown value={role} onChange={setRole} />
            </div>
            <button
              className={`mt-8 px-6 py-3 border-2 rounded-full flex items-center gap-2 w-[300px] justify-center transition-colors ${
                market && role
                  ? 'border-[#333333] text-[#333333] hover:bg-gray-50 cursor-pointer'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!market || !role}
              onClick={() => {
                if (!market || !role) return;
                const pdfPath = market === 'us' 
                  ? '/assets/pdfs/us-market.pdf'
                  : `/assets/pdfs/${role}.pdf`;
                window.open(pdfPath, '_blank');
              }}
            >
              Download PDF
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}