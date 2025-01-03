import React from 'react';
import Header from './Header';
import Content from './Content';
import Dropdowns from './Dropdowns';

export default function MainSection() {
  return (
    <section 
      className="bg-white"
      style={{
        WebkitTextSizeAdjust: '100%',
        tabSize: 4,
        fontFeatureSettings: 'normal',
        fontVariationSettings: 'normal',
        WebkitTapHighlightColor: 'transparent',
        lineHeight: 'inherit',
        fontFamily: 'Roboto,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',
        WebkitFontSmoothing: 'antialiased',
        '--tw-bg-opacity': '1',
        backgroundColor: 'rgb(255 255 255 / var(--tw-bg-opacity))'
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-24">
        <Header />
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2940"
            alt="Casino Roulette Wheel"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <Content />
        <Dropdowns />
      </div>
    </section>
  );
}