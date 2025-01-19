import React from 'react';

export default function Content() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <p className="w-full max-w-[710px] font-roboto text-[16px] sm:text-[20px] font-normal leading-[26px] sm:leading-[32px] text-left text-gray-700"
         style={{ 
           textUnderlinePosition: 'from-font',
           textDecorationSkipInk: 'none'
         }}>
        As regulatory scrutiny and litigation risk intensifies, gambling operators are increasingly at risk from reputational, compliance, and safer gambling threats hidden in customer service interactions. By joining this industry initiative, we'll use cutting-edge AI tools to analyze all your chat, voice-of-customer and service data.
      </p>
      <p className="w-full max-w-[710px] font-roboto text-[16px] sm:text-[20px] font-normal leading-[26px] sm:leading-[32px] text-left text-gray-700"
         style={{ 
           textUnderlinePosition: 'from-font',
           textDecorationSkipInk: 'none'
         }}>
        We'll give you a snapshot of your potential litigation, safer gambling and regulatory vulnerabilities and risks. We'll also use this unprecedented collective data to create the best in breed framework of real time triggers for you to identify and mitigate these risks before they escalate.
      </p>
      <div className="flex mt-4 sm:mt-8 justify-center lg:justify-start">
        <div>
          <p className="font-['DM_Serif_Text'] text-[28px] sm:text-[36px] italic font-normal leading-[32px] sm:leading-[40px] text-center lg:text-left text-[#ED6944]"
             style={{ 
               textUnderlinePosition: 'from-font',
               textDecorationSkipInk: 'none'
             }}>
            "This is too important to leave<br />to chance"
          </p>
          <p className="font-['DM_Serif_Text'] text-[14px] sm:text-[15.5px] italic font-normal leading-[20px] sm:leading-[24px] text-center lg:text-left text-[#4B5563] mt-2"
             style={{ 
               textUnderlinePosition: 'from-font',
               textDecorationSkipInk: 'none'
             }}>
            - CX Lead major EU gaming business
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
        <a
          href="https://calendly.com/david-hicks/delivery-logistics-after-party"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[rgb(51_51_51_/_var(--tw-bg-opacity))] text-white rounded-full hover:bg-gray-700 transition-colors"
          style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
}