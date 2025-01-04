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

const downloadButtonStyles = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#ED6944',
  color: 'white',
  borderRadius: '9999px',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
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
            style={downloadButtonStyles}
            className="hover:bg-[#e85933] active:bg-[#d54e2a]"
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