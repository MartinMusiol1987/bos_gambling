import React from 'react';

const addressStyles: React.CSSProperties = {
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
  fontFeatureSettings: 'normal',
  fontVariationSettings: 'normal',
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 'inherit',
  WebkitFontSmoothing: 'antialiased',
  color: 'rgb(255 255 255 / var(--tw-text-opacity))',
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: '#d1d1d1',
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem'
};

export default function AddressSection() {
  return (
    <div className="flex flex-col gap-3 font-sans" style={addressStyles}>
      <div className="font-bold text-xl">
        Address
      </div>
      <div className="text-xl" style={{ fontWeight: 300 }}>
        <div>85 Great Portland street</div>
        <div>First Floor</div>
        <div>London, W1W 7LT</div>
      </div>
    </div>
  );
}