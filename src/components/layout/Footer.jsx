import React from 'react';

const Footer = () => {
  const brandLinks = ["AliExpress", "1688.com", "Tmall Taobao World", "Alipay", "Lazada", "Taobao Global"];
  const searchLinks = ["Browse Alphabetically", "Onetouch", "Country Search", "Affiliate"];
  const policyLinks = [
    "Product Listing Policy",
    "Intellectual Property Protection",
    "Privacy Policy",
    "Terms of Use",
    "User Information Legal Enquiry Guide",
    "Integrity Compliance"
  ];

  return (
    <footer className="bg-[#F2F3F7] py-12 px-4 sm:px-6 md:px-8 text-center font-sans">
      <div className="max-w-7xl mx-auto space-y-4">
        
        
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-[13px] text-gray-500">
          {brandLinks.map((link, i) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:underline">{link}</a>
              {i !== brandLinks.length - 1 && <span className="text-gray-300">|</span>}
            </React.Fragment>
          ))}
        </div>

        
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-[13px] text-gray-500">
          {searchLinks.map((link, i) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:underline">{link}</a>
              {i !== searchLinks.length - 1 && <span className="text-gray-300">|</span>}
            </React.Fragment>
          ))}
        </div>

        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 text-xs sm:text-[13px] text-gray-500 pt-2">
          {policyLinks.map((link, i) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:underline">{link}</a>
              {i !== policyLinks.length - 1 && <span className="text-gray-400">-</span>}
            </React.Fragment>
          ))}
        </div>

        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 text-[11px] sm:text-[12px] text-gray-400 pt-4">
          <div className="flex items-center gap-1">
            <img 
              src="https://img.alicdn.com/tfs/TB19S_6Xv1H3KVjSZFHXXb97pXa-24-24.png" 
              alt="seal" 
              className="w-4 h-4"
            />
            <span>© 1999-2023 Alibaba.com. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <img 
              src="https://img.alicdn.com/tfs/TB1.6p_Xv1H3KVjSZFHXXb97pXa-24-24.png" 
              alt="license" 
              className="w-4 h-4"
            />
            <span>浙公网安备 33010002000092号</span>
          </div>
          <span>浙B2-20120091-4</span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;