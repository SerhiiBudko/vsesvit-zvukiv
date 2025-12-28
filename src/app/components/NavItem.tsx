interface NavItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export function NavItem({ label, href, hasDropdown = false }: NavItemProps) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-1 text-[15px] font-semibold text-[#003057] hover:text-[#0091DA] transition-colors"
    >
      {label}
      {hasDropdown && (
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          className="mt-0.5"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
