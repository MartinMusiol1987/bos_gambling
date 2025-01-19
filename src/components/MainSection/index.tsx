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
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-8 sm:py-12 md:py-24">
        <div className="lg:hidden">
          {/* Mobile Layout */}
          <Header hideButton={true} />
          <div className="flex justify-center">
            <a
              href="https://calendly.com/david-hicks/delivery-logistics-after-party"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[rgb(51_51_51_/_var(--tw-bg-opacity))] text-white rounded-full hover:bg-gray-700 transition-colors mt-8"
            >
              Schedule a Call
            </a>
          </div>
          <img
            src={mainImage}
            alt="Wallet connected to shield illustration representing safer gambling"
            className="w-full max-w-[485px] mx-auto mt-8 mb-12 object-contain"
          />
          <Content />
          <div className="flex flex-col items-center mt-8">
            <h3 className="font-roboto text-[20px] sm:text-[24px] font-bold leading-[28px] sm:leading-[32px] text-gray-700 w-full max-w-[485px] text-center"
                style={{ 
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}>
              Download Our Tailored Briefing Notes
            </h3>
            <p className="font-roboto text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[25px] text-[#4B5563] mt-4 sm:mt-6 w-full max-w-[485px]"
               style={{ 
                 textUnderlinePosition: 'from-font',
                 textDecorationSkipInk: 'none'
               }}>
              Download our tailored briefing notes today to learn how this collaborative venture can get you ahead of the curve, and keep you there.
            </p>
            <p className="font-roboto text-[14px] sm:text-[16px] font-semibold leading-[16px] sm:leading-[18.75px] text-gray-700 mt-6 sm:mt-8 w-full max-w-[485px]">
              Which Market are you in?
            </p>
            <div className="mt-4 w-full max-w-[300px]">
              <MarketDropdown value={market} onChange={setMarket} />
            </div>
            <p className="font-roboto text-[14px] sm:text-[16px] font-semibold leading-[16px] sm:leading-[18.75px] text-gray-700 mt-6 sm:mt-8 w-full max-w-[485px]">
              What role are you in?
            </p>
            <div className="mt-4 w-full max-w-[300px]">
              <RoleDropdown value={role} onChange={setRole} />
            </div>
            <button
              className={`mt-6 sm:mt-8 px-6 py-3 border-2 rounded-full flex items-center gap-2 w-full max-w-[300px] justify-center transition-colors ${
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

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:block">
          <Header />
          <div className="flex justify-between items-start mt-12">
            <div>
              <Content />
            </div>
            <div className="flex flex-col">
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
              <p className="font-roboto text-[16px] font-semibold leading-[18.75px] text-gray-700 mt-8">
                Which Market are you in?
              </p>
              <div className="mt-4">
                <MarketDropdown value={market} onChange={setMarket} />
              </div>
              <p className="font-roboto text-[16px] font-semibold leading-[18.75px] text-gray-700 mt-8">
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
      </div>
    </section>
  );
}