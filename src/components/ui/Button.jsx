
export const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyles = "w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-[#FA6C48] text-white hover:bg-[#e85a3a] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#FA6C48] text-[#FA6C48] hover:bg-[#FA6C48] hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};