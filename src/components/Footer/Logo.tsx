import React from 'react';
import logoWhite from '../../assets/images/logo-white.svg';
import { baseTextStyles } from '../../styles/commonStyles';

export default function Logo() {
  return (
    <div style={baseTextStyles}>
      <img src={logoWhite} alt="Story Bank Logo" className="h-[40px] w-auto" />
    </div>
  );
}