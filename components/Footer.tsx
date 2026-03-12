import Link from 'next/link';
import Image from 'next/image';
import CandleGlyph from './CandleGlyph';

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] pt-16 pb-8 px-6">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image 
                src="/images/logo-ca.png" 
                alt="CandleAid Lanka" 
                width={44} 
                height={44}
                className="brightness-110"
              />
              <div>
                <div className="lora font-bold text-[1.15rem] text-white">CandleAid Lanka</div>
                <div className="nunito font-extrabold text-[0.5rem] tracking-[0.22em] uppercase text-white/30">Est. 1990</div>
              </div>
            </div>
            <p className="nunito text-[0.88rem] text-white/40 leading-[1.85] max-w-[260px] mb-7">
              Lighting candles of hope across Sri Lanka through education, food, healthcare and empowerment. Entirely volunteer-run. Always.
            </p>
            <div className="nunito text-[0.85rem] text-white/35 leading-loose">
              <div>📞 &nbsp;0112 642 526</div>
              <div>📍 &nbsp;21/4 Dharmaratne Ave, Moratuwa</div>
              <div>🕐 &nbsp;Mon–Fri, 8:45am – 4:45pm</div>
            </div>
          </div>

          {/* Organisation */}
          <div>
            <div className="nunito font-extrabold text-[0.68rem] tracking-[0.18em] uppercase text-[#E8973A] mb-5">Organisation</div>
            <div className="flex flex-col gap-[0.65rem]">
              {[
                ['About Us', '/about'],
                ['Board of Directors', '/about/board'],
                ['International Representatives', '/about/international-reps'],
                ['Our Staff', '/about/staff'],
                ['Reports', '/reports'],
              ].map(([label, href]) => (
                <Link key={label} href={href}
                  className="nunito text-[0.87rem] text-white/40 hover:text-white/85 transition-colors duration-200 no-underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <div className="nunito font-extrabold text-[0.68rem] tracking-[0.18em] uppercase text-[#E8973A] mb-5">Programmes</div>
            <div className="flex flex-col gap-[0.65rem]">
              {[
                ['Education Sponsorship', '/programmes/education-sponsorship'],
                ['Gift A Meal', '/programmes/gift-a-meal'],
                ['Mother & Child', '/programmes/mother-and-child'],
                ['Cancer Assistance', '/programmes/cancer-sponsorship'],
                ['Women Empowerment', '/programmes/sew'],
                ['Children Special Needs', '/programmes/special-needs'],
                ['Disaster Relief', '/programmes/disaster-relief'],
              ].map(([label, href]) => (
                <Link key={label} href={href}
                  className="nunito text-[0.87rem] text-white/40 hover:text-white/85 transition-colors duration-200 no-underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sponsor + Newsletter */}
          <div>
            <div className="nunito font-extrabold text-[0.68rem] tracking-[0.18em] uppercase text-[#E8973A] mb-5">Sponsor a Life</div>
            <div className="flex flex-col gap-2 mb-7">
              {[
                ['Sponsor a Family', '/sponsor#family'],
                ['Sponsor a Patient', '/sponsor#patient'],
                ['Sponsor a Student', '/sponsor#student'],
              ].map(([label, href]) => (
                <Link key={label} href={href}
                  className="nunito text-[0.87rem] text-[#E8973A]/75 hover:text-[#E8973A] transition-colors duration-200 no-underline flex items-center gap-1">
                  → {label}
                </Link>
              ))}
            </div>

            <div className="nunito font-extrabold text-[0.68rem] tracking-[0.18em] uppercase text-[#E8973A] mb-3">Newsletter</div>
            <p className="nunito text-[0.83rem] text-white/40 leading-[1.8] mb-3">Stay updated with stories and impact news.</p>
            <input type="email" placeholder="your@email.com"
              className="w-full px-3 py-2 bg-white/05 border border-white/10 text-white rounded text-[0.83rem] nunito outline-none mb-2 placeholder:text-white/25" />
            <Link href="#" className="inline-block bg-[#C1502E] hover:bg-[#A0441F] text-white nunito font-bold text-[0.8rem] px-4 py-2 rounded transition-colors duration-200">
              Subscribe
            </Link>
          </div>
        </div>

        <div className="border-t border-white/07 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="nunito text-[0.78rem] text-white/20">© 2026 CandleAid Lanka. All rights reserved.</p>
          <p className="nunito text-[0.78rem] text-white/20">
            Developed by{' '}
            <a href="https://codexcoretech.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 transition-colors">
              Codexcore Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
