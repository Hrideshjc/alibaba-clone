import React from 'react';

const VIDEO_SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

const Hero = () => {
  return (
    <section
      className="min-h-[620px] md:min-h-[720px] flex items-center px-4 sm:px-6 lg:px-20 py-16"
      style={{ background: 'linear-gradient(-46deg, #FF9600 18%, #FF6A00 100%)' }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        
        <div className="text-white space-y-6 text-center md:text-left px-0 sm:px-4 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-full md:max-w-md mx-auto md:mx-0">
            Source, pay for, and ship your goods on Alibaba.com
          </h1>
        </div>

        
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-200 relative">
            <video
              className="w-full h-full object-cover"
              poster="https://gw.alicdn.com/imgextra/i3/O1CN01f47edA1DULOeTMKGx_!!6000000000219-2-tps-1304-720.png"
              src={VIDEO_SRC}
              controls
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/10 transition-colors" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;