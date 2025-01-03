import React from 'react';
import logoWhite from '../assets/images/logo-white.svg';

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
    <nav className="bg-orange-400" role="navigation" aria-label="Main Navigation">
      <div className="flex gap-5 md:gap-10 justify-between items-center max-w-7xl mx-auto px-5 py-5 md:py-10">
        <div className="py-2">
          <a href="/" title="Story Bank">
            <img src={logoWhite} alt="Story Bank Logo" className="h-[40px] w-auto" />
          </a>
        </div>
        <div className="flex-shrink-0 flex gap-4 items-center">
          <a
            style={buttonStyles}
            href="/app"
            title="Get Started Now"
          >
            Get Started Now
          </a>
          <a
            className="block text-white font-medium hover:bg-white hover:text-orange-400 px-6 py-3 rounded-full border-2 border-white transition-all"
            href="/app"
            title="Log in"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}