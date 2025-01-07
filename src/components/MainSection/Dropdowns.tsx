import React, { useState } from 'react';

const containerStyles: React.CSSProperties = {
  position: 'relative',
  width: '300px'
};

const dropdownStyles: React.CSSProperties = {
  WebkitTextSizeAdjust: '100%',
  fontFeatureSettings: 'normal',
  fontVariationSettings: 'normal',
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 'inherit',
  fontFamily: 'Roboto,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
  WebkitFontSmoothing: 'antialiased',
  width: '100%',
  padding: '1rem 1.25rem',
  borderRadius: '0.75rem',
  border: '2px solid #e5e7eb',
  backgroundColor: 'white',
  marginTop: '0.75rem',
  fontSize: '1rem',
  appearance: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  color: '#374151'
};

const arrowStyles: React.CSSProperties = {
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(calc(-50% + 12px))',
  width: '10px',
  height: '10px',
  borderRight: '2px solid #6b7280',
  borderBottom: '2px solid #6b7280',
  transformOrigin: 'center',
  rotate: '45deg',
  pointerEvents: 'none'
};

const downloadButtonStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#ED6944',
  color: 'white',
  borderRadius: '0.75rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  marginTop: '1.5rem',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
};

// PDF mapping for non-US market
const rowPdfMap = {
  regulatory: '/assets/pdfs/regulatory-safer-gambling.pdf',
  operations: '/assets/pdfs/operations.pdf',
  cx: '/assets/pdfs/customer-experience.pdf'
};

export default function Dropdowns() {
  const [market, setMarket] = useState('');
  const [role, setRole] = useState('');

  const handleDownload = () => {
    // For US market, always serve us-market.pdf regardless of role
    if (market === 'us') {
      window.open('/assets/pdfs/us-market.pdf', '_blank');
      return;
    }

    // For other markets, use the role-specific PDF
    const pdfPath = rowPdfMap[role as keyof typeof rowPdfMap];
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-16">
      <div className="text-center">
        <label className="text-xl font-medium block text-gray-700">Which Market are you in?</label>
        <div style={containerStyles}>
          <select 
            style={dropdownStyles}
            className="hover:border-orange-400 focus:border-orange-400 focus:outline-none"
            value={market}
            onChange={(e) => setMarket(e.target.value)}
          >
            <option value="" disabled>Please select...</option>
            <option value="us">US</option>
            <option value="row">Rest of the World</option>
          </select>
          <div style={arrowStyles}></div>
        </div>
      </div>

      <div className="text-center">
        <label className="text-xl font-medium block text-gray-700">What role are you in?</label>
        <div style={containerStyles}>
          <select 
            style={dropdownStyles}
            className="hover:border-orange-400 focus:border-orange-400 focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled>Please select...</option>
            <option value="regulatory">Regulatory Safer Gambling</option>
            <option value="operations">Operations</option>
            <option value="cx">Customer Experience</option>
          </select>
          <div style={arrowStyles}></div>
        </div>
      </div>

      {role && (
        <div className="flex flex-col items-center gap-4">
          <button
            style={downloadButtonStyles}
            className="hover:bg-[#e85933] active:bg-[#d54e2a]"
            onClick={handleDownload}
            aria-label="Download PDF in new tab"
          >
            Download PDF
          </button>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">If you'd like to know more schedule a meeting</p>
            <a
              className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors mt-4"
              href="https://calendly.com/david-hicks/xm-coach-initial-discussion-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 