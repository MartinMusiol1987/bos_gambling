import React from 'react';

export default function Content() {
  return (
    <div className="flex flex-col gap-8">
      <p className="w-[710px] font-roboto text-[20px] font-normal leading-[32px] text-left text-gray-700"
         style={{ 
           textUnderlinePosition: 'from-font',
           textDecorationSkipInk: 'none'
         }}>
        As regulatory scrutiny and litigation risk intensifies, gambling operators are increasingly at risk from reputational, compliance, and safer gambling threats hidden in customer service interactions. By joining this industry initiative, we'll use cutting-edge AI tools to analyze all your chat, voice-of-customer and service data.
      </p>
      <p className="w-[710px] font-roboto text-[20px] font-normal leading-[32px] text-left text-gray-700"
         style={{ 
           textUnderlinePosition: 'from-font',
           textDecorationSkipInk: 'none'
         }}>
        We'll give you a snapshot of your potential litigation, safer gambling and regulatory vulnerabilities and risks. We'll also use this unprecedented collective data to create the best in breed framework of real time triggers for you to identify and mitigate these risks before they escalate.
      </p>
      <div className="flex mt-8">
        <div className="w-1 bg-orange-400 mr-6"></div>
        <div>
          <blockquote 
            className="text-4xl text-gray-700 mb-2"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            "This is too important to leave to chance"
            <cite className="block text-base text-gray-600 not-italic mt-4 font-bold">
              - CX Lead major EU gaming business
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="https://calendly.com/david-hicks/xm-coach-initial-discussion-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
}