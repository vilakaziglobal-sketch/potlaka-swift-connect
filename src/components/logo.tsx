export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-display text-xl font-black tracking-tight text-ink md:text-2xl">
        POTLAKA<span className="relative inline-block align-baseline text-2xl font-black text-[#FF1A1A] md:text-3xl" style={{ textShadow: "0 0 12px rgba(255,26,26,0.65), 0 0 24px rgba(255,26,26,0.35)" }}>.</span>COM
      </span>
    </div>
  );
}
