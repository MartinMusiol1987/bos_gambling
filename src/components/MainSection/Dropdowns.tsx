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

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarketDropdown({ value, onChange }: DropdownProps) {
  return (
    <div style={containerStyles}>
      <select 
        style={dropdownStyles}
        className="hover:border-orange-400 focus:border-orange-400 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Please select...</option>
        <option value="us">US</option>
        <option value="row">Rest of the World</option>
      </select>
      <div style={arrowStyles}></div>
    </div>
  );
}

export function RoleDropdown({ value, onChange }: DropdownProps) {
  return (
    <div style={containerStyles}>
      <select 
        style={dropdownStyles}
        className="hover:border-orange-400 focus:border-orange-400 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Please select...</option>
        <option value="regulatory">Regulatory Safer Gambling</option>
        <option value="operations">Operations</option>
        <option value="cx">Customer Experience</option>
      </select>
      <div style={arrowStyles}></div>
    </div>
  );
}

export default function Dropdowns() {
  const [market, setMarket] = useState('');
  const [role, setRole] = useState('');

  const handleDownload = () => {
    if (!market || !role) return;
    
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

  const isDisabled = !market || !role;

  return (
    <div className="flex flex-col items-center gap-8 mt-16">
      <div className="text-center">
        <label className="text-xl font-medium block text-gray-700">Which Market are you in?</label>
        <MarketDropdown value={market} onChange={setMarket} />
      </div>

      <div className="text-center">
        <label className="text-xl font-medium block text-gray-700">What role are you in?</label>
        <RoleDropdown value={role} onChange={setRole} />
      </div>

      <button
        className={`mt-8 px-6 py-3 border-2 rounded-full flex items-center gap-2 w-[300px] justify-center transition-colors ${
          isDisabled 
            ? 'border-gray-300 text-gray-300 cursor-not-allowed' 
            : 'border-[#333333] text-[#333333] hover:bg-gray-50 cursor-pointer'
        }`}
        onClick={handleDownload}
        disabled={isDisabled}
      >
        Download PDF
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </button>
      
      {market && role && (
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-4">If you'd like to know more schedule a meeting</p>
          <a
            className="inline-block px-6 py-3 bg-[rgb(51_51_51_/_var(--tw-bg-opacity))] text-white rounded-full hover:bg-gray-700 transition-colors mt-4"
            style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
            href="https://calendly.com/david-hicks/delivery-logistics-after-party"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </div>
  );
} 