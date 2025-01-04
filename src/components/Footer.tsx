import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import siteLogo from '../assets/images/site_logo.png';

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col gap-8 py-12 md:py-24">
          <div>
            <img src={siteLogo} alt="XM Coach Logo" className="h-[40px] w-auto" />
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="font-bold text-xl">Address</div>
            <div className="font-light text-xl">
              <div>85 Great Portland street</div>
              <div>First Floor</div>
              <div>London, W1W 7LT</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-bold text-xl">Phone</div>
            <div className="font-light text-xl">
              <a
                className="flex items-center gap-2 underline"
                href="tel:+13472275182"
                title="Phone"
              >
                +1 347-227-5182 <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-bold text-xl">Email</div>
            <div className="font-light text-xl">
              <a
                className="flex items-center gap-2 underline"
                href="mailto:help@storybank.com"
                title="Email"
              >
                help@storybank.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 md:py-12">
          <div className="font-light text-xl">
            Story Bank Ltd. is a company registered in England and Wales (company no. 14293144) 85
            Great Portland street, First Floor, London, W1W 7LT
          </div>
          <div className="font-light text-xl">
            Copyright © {new Date().getFullYear()}. Story Bank Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}