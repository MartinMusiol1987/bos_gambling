import React, { useState } from 'react';

const buttonStyles = {
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
  backgroundColor: 'rgb(51 51 51)',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  fontWeight: 500,
  color: 'rgb(255 255 255)',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  transitionDuration: '.15s'
} as const;

export default function Dropdowns() {
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleMarketChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMarket(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const getPdfPath = () => {
    if (!selectedRole) return '';
    const filename = selectedRole.toLowerCase().replace(/\s+/g, '-');
    return `/assets/pdfs/${filename}.pdf`;
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <div className="w-full max-w-xs">
        <label className="block text-center mb-2">Which Market are you in?</label>
        <select
          value={selectedMarket}
          onChange={handleMarketChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select a market</option>
          <option value="US">US</option>
          <option value="Rest of the World">Rest of the World</option>
        </select>
      </div>

      <div className="w-full max-w-xs">
        <label className="block text-center mb-2">What role are you in?</label>
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select a role</option>
          <option value="Regulatory Safer Gambling">Regulatory Safer Gambling</option>
          <option value="Operations">Operations</option>
          <option value="Customer Experience">Customer Experience</option>
        </select>
      </div>

      {selectedRole && (
        <div className="flex flex-col items-center gap-4">
          <a
            href={getPdfPath()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Download PDF
          </a>
          <p className="text-center mt-4">
            If you'd like to know more schedule a meeting
          </p>
          <a
            style={buttonStyles}
            href="https://calendly.com/david-hicks/xm-coach-initial-discussion-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </div>
  );
} 