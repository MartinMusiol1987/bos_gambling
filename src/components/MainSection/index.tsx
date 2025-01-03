import React from 'react';
import Header from './Header';
import Content from './Content';
import CallToAction from './CallToAction';

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
        <Content />
        <CallToAction />
      </div>
    </section>
  );
}