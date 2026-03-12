interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

import Link from 'next/link';

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#2C1A0E] to-[#1A0E06] pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-[#E8973A]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#2C1A0E]/80 to-transparent pointer-events-none" />

      <div className="max-w-[1260px] mx-auto relative">
        {breadcrumbs && (
          <div className="flex items-center gap-2 mb-5 nunito text-[0.78rem] text-white/40">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-white/70 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-white/65">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2.5px] bg-[#C1502E] rounded-full" />
            <span className="nunito font-extrabold text-[0.72rem] tracking-[0.2em] uppercase text-[#E8973A]">{eyebrow}</span>
          </div>
        )}
        <h1 className="lora font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="nunito text-[1rem] text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
