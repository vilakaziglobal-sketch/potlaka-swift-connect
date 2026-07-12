export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-black tracking-tight ${className}`}>
      POTLAKA<span className="relative inline-block align-baseline text-[#FF1A1A]" style={{ textShadow: "0 0 12px rgba(255,26,26,0.65), 0 0 24px rgba(255,26,26,0.35)" }}>.</span>COM
    </span>
  );
}
