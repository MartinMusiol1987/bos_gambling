import React from 'react';

export default function Content() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <p className="text-[18px]">
        As regulatory scrutiny and litigation risk intensifies, gambling operators are increasingly at risk from reputational, compliance, and safer gambling threats hidden in customer service interactions. By joining this industry initiative, we'll use cutting-edge AI tools to analyze all your chat, voice-of-customer and service data.
      </p>
      <p className="text-[18px]">
        We'll give you a snapshot of your potential litigation, safer gambling and regulatory vulnerabilities and risks. We'll also use this unprecedented collective data to create the best in breed framework of real time triggers for you to identify and mitigate these risks before they escalate.
      </p>
      <div className="md:col-span-2 mt-8 flex justify-center">
        <div className="w-1/2 text-center flex">
          <div className="w-1 bg-orange-400 mr-6"></div>
          <div>
            <blockquote 
              className="text-4xl text-gray-700 mb-2"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              "This is too important to leave to chance"
              <cite className="block text-sm text-gray-600 not-italic mt-4 font-bold">
                - CX Lead major EU gaming business
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-center mt-12">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold text-center mb-4">
            Download Our Tailored Briefing Notes
          </h3>
          <p className="text-[18px] text-center">
            Download our tailored briefing notes today to learn how this collaborative venture can get you ahead of the curve, and keep you there.
          </p>
        </div>
      </div>
    </div>
  );
}