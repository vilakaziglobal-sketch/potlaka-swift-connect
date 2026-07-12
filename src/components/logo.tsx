export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] shadow-elegant">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" strokeWidth="2.5" stroke="currentColor">
          <path d="M4 12h11l-3-3M4 12l3 3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="19" cy="12" r="1.6" fill="currentColor" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[image:var(--gradient-accent)] ring-2 ring-background" />
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        POTLAKA<span className="font-black text-[#FF1A1A]">.</span>COM
      </span>
    </div>
  );
}
