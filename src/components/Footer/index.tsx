import React from 'react';
import Logo from './Logo';
import ContactInfo from './ContactInfo';
import LegalInfo from './LegalInfo';

export default function Footer() {
  return (
    <footer 
      style={{
        WebkitTextSizeAdjust: '100%',
        tabSize: 4,
        fontFeatureSettings: 'normal',
        fontVariationSettings: 'normal',
        WebkitTapHighlightColor: 'transparent',
        lineHeight: 'inherit',
        fontFamily: 'Roboto,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
        WebkitFontSmoothing: 'antialiased',
        boxSizing: 'border-box',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#d1d1d1',
        '--tw-bg-opacity': '1',
        backgroundColor: 'rgb(237 105 68 / var(--tw-bg-opacity))',
        '--tw-text-opacity': '1',
        color: 'rgb(255 255 255 / var(--tw-text-opacity))'
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col gap-8 py-12 md:py-24">
          <Logo />
          <ContactInfo />
        </div>
        <LegalInfo />
      </div>
    </footer>
  );
}