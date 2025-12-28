interface BulletRowProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function BulletRow({ children, icon }: BulletRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0091DA]/10 flex items-center justify-center mt-0.5">
        {icon || (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path 
              d="M11.667 3.5L5.25 9.917L2.333 7" 
              stroke="#0091DA" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <p className="text-white/95 text-base leading-relaxed">{children}</p>
    </div>
  );
}
