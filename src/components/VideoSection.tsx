import React from 'react';

export default function VideoSection() {
  return (
    <section className="w-full bg-black">
      <div className="relative max-w-4xl mx-auto">
        <video
          className="w-full aspect-video object-cover"
          controls
          controlsList="nodownload"
          playsInline
          poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-2633/1080p.mp4"
            type="video/mp4"
          />
          Your browser doesn't support the video tag.
        </video>
        <div className="absolute bottom-2 right-4 text-sm text-white">
          David Hicks, Co-Founder & Chairman
        </div>
      </div>
    </section>
  );
}