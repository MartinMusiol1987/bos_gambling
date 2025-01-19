import React from 'react';

interface HeaderProps {
  hideButton?: boolean;
}

export default function Header({ hideButton = false }: HeaderProps) {
  return (
    <div>
      <h1 className="text-[42px] sm:text-[62px] font-extrabold leading-[54px] sm:leading-[79.36px] tracking-[-0.01em] text-[#ED6944] max-w-full mb-4 sm:mb-6 text-center lg:text-left">
        Join the Safer Gambling Revolution
      </h1>
      <h2 className="text-[24px] sm:text-[32px] font-normal leading-[32px] sm:leading-[40px] text-gray-700 text-center lg:text-left">
        Unlock Best in Breed Insights with AI-Driven Text Analytics
      </h2>
      {!hideButton && (
        <div className="lg:hidden">
          <a
            href="https://calendly.com/david-hicks/delivery-logistics-after-party"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[rgb(51_51_51_/_var(--tw-bg-opacity))] text-white rounded-full hover:bg-gray-700 transition-colors mt-8"
            style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
          >
            Schedule a Call
          </a>
        </div>
      )}
    </div>
  );
}