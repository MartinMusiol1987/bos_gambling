import React from 'react';
import { baseTextStyles } from '../../styles/commonStyles';

export default function LegalInfo() {
  return (
    <div className="py-6 md:py-12" style={baseTextStyles}>
      <div className="font-light text-xl">
        Story Bank Ltd. is a company registered in England and Wales (company no. 14293144) 85
        Great Portland street, First Floor, London, W1W 7LT
      </div>
      <div className="font-light text-xl">
        Copyright © {new Date().getFullYear()}. Story Bank Ltd. All rights reserved.
      </div>
    </div>
  );
}