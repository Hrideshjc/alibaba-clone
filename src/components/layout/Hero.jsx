import React from 'react';
import { FaPlay } from 'react-icons/fa';

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

        
        <div className="relative group cursor-pointer">
          
          <div className="rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            
            <div className="aspect-video bg-gray-200 relative">
              <img 
                src="https://gw.alicdn.com/imgextra/i3/O1CN01f47edA1DULOeTMKGx_!!6000000000219-2-tps-1304-720.png" 
                alt="Video thumbnail showing global logistics"
                className="w-full h-full object-cover"
              />
              
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FaPlay className="text-[#FA6C48] text-xl md:text-2xl ml-1" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl -z-10" />
        </div>

      </div>
    </section>
  );
};

export default Hero;