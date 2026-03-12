'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CandleGlyph from './CandleGlyph';

const NAV = [
  { label: 'Our Story', href: '/about' },
  {
    label: 'Programmes', href: '/programmes',
    children: [
      { label: 'Education Sponsorship', href: '/programmes/education-sponsorship' },
      { label: 'Overseas Scholarships', href: '/programmes/overseas-scholarships' },
      { label: 'Library Project', href: '/programmes/library-project' },
      { label: 'Gift A Meal', href: '/programmes/gift-a-meal' },
      { label: 'Mother & Child', href: '/programmes/mother-and-child' },
      { label: 'Cancer Assistance', href: '/programmes/cancer-sponsorship' },
      { label: 'Sigiri Trust Fund', href: '/programmes/sigiri-trust-fund' },
      { label: 'Kidney Dialysis', href: '/programmes/kidney-dialysis' },
      { label: 'Women Empowerment (SEW)', href: '/programmes/sew' },
      { label: 'Children With Special Needs', href: '/programmes/special-needs' },
    ],
  },
  { label: 'Be a Sponsor', href: '/sponsor' },
  { label: 'Donate', href: '/donate' },
  { label: 'Reports', href: '/reports' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#2C1A0E]/97 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-6 flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? '62px' : '74px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image 
              src="/images/logo-ca.png" 
              alt="CandleAid Lanka" 
              width={90} 
              height={90}
              className="transition-all duration-300"
              style={{ 
                width: scrolled ? '80px' : '90px', 
                height: 'auto',
                filter: scrolled ? 'brightness(1.1)' : 'none'
              }}
              priority
            />
            <div>
              <div className={`lora font-bold text-[1.1rem] leading-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
                CandleAid
              </div>
              <div className={`nunito font-extrabold text-[0.5rem] tracking-[0.28em] uppercase transition-colors duration-300 ${scrolled ? 'text-white/50' : 'text-white/50'}`}>
                Lanka · Est. 1990
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <div key={n.label} className="relative group">
                <Link
                  href={n.href}
                  className={`nunito font-semibold text-[0.85rem] px-3 py-2 rounded transition-all duration-150 hover:bg-white/10 ${
                    scrolled ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {n.label}
                  {n.children && <span className="ml-1 opacity-50">▾</span>}
                </Link>
                {n.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#FDF8F0] border border-[#EDE0CC] shadow-xl min-w-[220px] py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
                    {n.children.map(c => (
                      <Link key={c.label} href={c.href}
                        className="block px-5 py-2 nunito text-[0.82rem] text-[#5C3D25] hover:text-[#C1502E] hover:pl-7 hover:bg-[#C1502E]/04 transition-all duration-150">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/donate"
              className="ml-2 bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold text-[0.82rem] px-4 py-2 rounded transition-all duration-200 hover:-translate-y-px shadow-md hover:shadow-lg">
              Donate Now
            </Link>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-[5px] p-1" onClick={() => setMob(true)}>
            {[0,1,2].map(i => (
              <span key={i} className={`block w-[22px] h-[2px] rounded transition-colors duration-300 ${scrolled ? 'bg-[#2C1A0E]' : 'bg-white'}`} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[900] bg-[#FAF3E8] transition-transform duration-300 ease-in-out overflow-y-auto ${mob ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#EDE0CC]">
          <span className="lora font-bold text-xl text-[#2C1A0E]">CandleAid Lanka</span>
          <button onClick={() => setMob(false)} className="text-2xl text-[#2C1A0E]">✕</button>
        </div>
        <div className="px-6 py-4 flex flex-col">
          {NAV.map(n => (
            <div key={n.label}>
              <Link href={n.href} onClick={() => setMob(false)}
                className="nunito font-bold text-xl text-[#2C1A0E] block py-3 border-b border-[#EDE0CC]">
                {n.label}
              </Link>
              {n.children && (
                <div className="pl-4 py-2 flex flex-col gap-1">
                  {n.children.map(c => (
                    <Link key={c.label} href={c.href} onClick={() => setMob(false)}
                      className="nunito text-[0.9rem] text-[#8C6845] py-1 block">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/donate" onClick={() => setMob(false)}
            className="mt-6 bg-[#C1502E] text-white nunito font-bold text-center py-3 rounded block">
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}
