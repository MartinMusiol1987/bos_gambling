import React from 'react';
import { ArrowIcon } from '../common/ArrowIcon';
import AddressSection from './AddressSection';

const contactStyles: React.CSSProperties = {
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
  fontFeatureSettings: 'normal',
  fontVariationSettings: 'normal',
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 'inherit',
  fontFamily: 'Roboto,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
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

export default function ContactInfo() {
  return (
    <div style={contactStyles}>
      <AddressSection />

      <div className="flex flex-col gap-3" style={contactStyles}>
        <div className="font-bold text-xl">Phone</div>
        <div className="font-light text-xl">
          <a
            className="flex items-center gap-2 underline"
            href="tel:+13472275182"
            title="Phone"
          >
            +1 347-227-5182 <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-3" style={contactStyles}>
        <div className="font-bold text-xl">Email</div>
        <div className="font-light text-xl">
          <a
            className="flex items-center gap-2 underline"
            href="mailto:help@storybank.com"
            title="Email"
          >
            help@storybank.com <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}