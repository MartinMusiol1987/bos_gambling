import React from 'react';

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
};

export default function CallToAction() {
  return (
    <div className="text-center">
      <p className="text-[rgb(237,105,68)] mb-6">
        Start building your narrative today!
      </p>
      <a
        style={buttonStyles}
        href="/app"
        title="Get Started Now"
      >
        Get Started Now
      </a>
    </div>
  );
}