interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  className = '' 
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-4 rounded-full border-2 border-gray-200 focus:border-[#0091DA] focus:outline-none focus:ring-2 focus:ring-[#0091DA]/20 transition-all ${className}`}
    />
  );
}
