import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-col text-left">
      <h1 className="font-roboto text-[62px] font-bold leading-[79.36px] tracking-[-0.62px] text-left text-[#ED6944] mb-6"
          style={{ 
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none'
          }}>
        Join the Safer Gambling Revolution
      </h1>
      <h2 className="font-roboto text-[30px] font-normal leading-[36px] text-left text-gray-700 mb-12"
          style={{ 
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none'
          }}>
        Unlock Best in Breed Insights with AI-Driven Text Analytics
      </h2>
    </div>
  );
}