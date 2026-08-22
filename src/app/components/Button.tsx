import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

/** Internal app routes start with a single "/" — "//host" is external. */
function isInternalRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '' 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full";
  
  const variants = {
    primary: "bg-[#0091DA] text-white hover:bg-[#007AC2] shadow-md hover:shadow-lg",
    secondary: "bg-[#FFB703] text-[#003057] hover:bg-[#FFD966] shadow-md hover:shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#003057]",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    // Route within the app: navigate client-side instead of reloading the
    // whole bundle. Anything else (tel:, mailto:, maps links) stays an <a>.
    if (isInternalRoute(href)) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    const isExternalSite = /^https?:\/\//i.test(href);

    return (
      <a
        href={href}
        className={classes}
        {...(isExternalSite
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
