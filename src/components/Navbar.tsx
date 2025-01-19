import React from 'react';
import siteLogo from '../assets/images/site_logo.png';

const buttonStyles: React.CSSProperties = {
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
  fontFeatureSettings: 'normal',
  fontVariationSettings: 'normal',
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 'inherit',
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d1d1d1',
  textDecoration: 'inherit',
  display: 'inline-block',
  borderRadius: '9999px',
  backgroundColor: 'rgb(51 51 51 / var(--tw-bg-opacity))',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  fontWeight: 500,
  color: 'rgb(255 255 255 / var(--tw-text-opacity))',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  transitionDuration: '.15s',
  '--tw-bg-opacity': '1',
  '--tw-text-opacity': '1'
} as React.CSSProperties;

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-orange-400 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <div className="py-2">
          <a href="/" title="XM Coach">
            <img src={siteLogo} alt="XM Coach Logo" className="h-[40px] w-auto" />
          </a>
        </div>
        <div className="flex-shrink-0 hidden lg:block">
          <a
            style={buttonStyles}
            href="https://calendly.com/david-hicks/delivery-logistics-after-party"
            title="Schedule a Call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </nav>
  );
}