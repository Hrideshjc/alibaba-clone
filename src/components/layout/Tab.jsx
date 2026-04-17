import React, { useState, useRef } from 'react';
import { FiSearch, FiMessageSquare, FiShield, FiCreditCard, FiTruck } from 'react-icons/fi';

const BuyerPageTabs = () => {
  const [activeTab, setActiveTab] = useState('what');

  const whatRef = useRef(null);
  const newRef = useRef(null);
  const hearRef = useRef(null);
  const latestRef = useRef(null);

  const tabs = [
    { id: 'what', label: 'What is Alibaba.com?', ref: whatRef },
    { id: 'new', label: 'New to sourcing on Alibaba.com?', ref: newRef },
    { id: 'hear', label: 'Hear from our buyers', ref: hearRef },
    { id: 'latest', label: 'Latest from Alibaba.com', ref: latestRef },
  ];

  const handleTabClick = (tabId, ref) => {
    setActiveTab(tabId);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full font-sans">
      <div className="flex flex-wrap bg-[#FA6C48] sticky top-0 z-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.ref)}
            className={`flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors border-r border-orange-400 last:border-r-0 ${
              activeTab === tab.id
                ? 'bg-orange-300 text-gray-800'
                : 'text-white hover:bg-orange-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-10 bg-white">
        <section ref={whatRef} id="what" className="scroll-mt-24">
          <WhatIsAlibaba />
        </section>
        <section ref={newRef} id="new" className="scroll-mt-24">
          <NewToSourcing />
        </section>
        <section ref={latestRef} id="latest" className="scroll-mt-24">
          <OrderConfidence />
        </section>
        <section ref={hearRef} id="hear" className="scroll-mt-24">
          <HearFromBuyers />
        </section>
      </div>
    </div>
  );
};

const WhatIsAlibaba = () => (
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is Alibaba.com?</h2>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        Alibaba.com is one of the world's largest wholesale marketplaces, with 20 years of experience helping business-to-business (B2B) companies buy and sell their goods around the world.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        { val: '190+', label: 'countries and regions' },
        { val: '40+', label: 'industries' },
        { val: '5,900+', label: 'product categories' },
        { val: '16', label: 'languages translated' },
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-[#FA6C48] text-4xl font-bold">{stat.val}</div>
          <div className="text-gray-500 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const NewToSourcing = () => {
  const steps = [
    { id: 1, title: 'Find products and sellers', icon: <FiSearch /> },
    { id: 2, title: 'Connect with sellers', icon: <FiMessageSquare /> },
    { id: 3, title: 'Place and protect order', icon: <FiShield /> },
    { id: 4, title: 'Pay on Alibaba.com', icon: <FiCreditCard /> },
    { id: 5, title: 'Ship and receive your goods', icon: <FiTruck /> },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">New to sourcing on Alibaba.com?</h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">Find everything you need in one place. From finding ready-to-ship products or a partner to customize the product you want...</p>
        <button className="w-full sm:w-auto px-8 py-3 border border-[#FA6C48] text-[#FA6C48] rounded-full font-bold hover:bg-[#FA6C48] hover:text-white transition-all">
          Learn more
        </button>
      </div>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#FA6C48] text-xl group-hover:bg-[#FA6C48] group-hover:text-white transition-all">
              {step.icon}
            </div>
            <div>
              <div className="text-[#FA6C48] font-bold text-sm">Step {step.id}</div>
              <div className="font-semibold text-gray-800">{step.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const OrderConfidence = () => (
  <div className="bg-[#FFB121] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div className="text-white w-full md:w-2/3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Order with confidence</h2>
        <p className="text-base sm:text-lg opacity-90">Ensure product quality and on-time delivery with Trade Assurance, the Alibaba.com order protection service.</p>
      </div>
      <button className="w-full md:w-auto bg-white text-[#FFB121] px-10 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors">
        Learn more
      </button>
    </div>
  </div>
);
const HearFromBuyers = () => {
  const buyerCards = [
    {
      id: 1,
      image: 'https://img.alicdn.com/imgextra/i3/O1CN01E7c2ut1XV4NDGv5fj_!!6000000002928-0-tps-600-380.jpg',
      alt: 'Business buyers in discussion',
    },
    {
      id: 2,
      image: 'https://img.alicdn.com/imgextra/i1/O1CN014U4UNC1uYwtGaffke_!!6000000006050-0-tps-600-380.jpg',
      alt: 'Buyer reviewing product samples',
    },
    {
      id: 3,
      image: 'https://img.alicdn.com/imgextra/i3/O1CN01j4TLzn1Iwo7q59LLo_!!6000000000958-0-tps-600-380.jpg',
      alt: 'Handshake between buyers and supplier',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Hear from our buyers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {buyerCards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-200">
              <img src={card.image} alt={card.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">How Alibaba.com Enhanced Supplier Relations...</h3>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>May 21, 2021</span>
                <span>2 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="w-full md:w-auto px-12 py-3 border-2 border-[#FA6C48] text-[#FA6C48] font-bold rounded-full hover:bg-[#FA6C48] hover:text-white transition-all duration-300 transform active:scale-95">
          See more
        </button>
      </div>
    </div>
  );
}

    

export default BuyerPageTabs;
