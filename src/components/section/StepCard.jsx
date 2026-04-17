// src/components/sections/StepCard.jsx
import { FiSearch } from 'react-icons/fi'; // Using React Icons

export const StepCard = ({ number, title, description, Icon }) => (
  <div className="w-full max-w-[320px] sm:max-w-none flex flex-col items-center text-center p-6 bg-white rounded-xl border border-transparent hover:border-aliPrimary/20 hover:shadow-xl transition-all group">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-aliBg rounded-full flex items-center justify-center mb-4 group-hover:bg-aliPrimary/10 transition-colors">
      <Icon className="text-3xl sm:text-4xl text-gray-700 group-hover:text-aliPrimary" />
    </div>
    <span className="text-aliPrimary font-bold text-sm sm:text-[15px] mb-2">STEP {number}</span>
    <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);