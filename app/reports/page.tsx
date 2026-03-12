import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Reports' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Transparency" title="Reports & Communications" subtitle="CandleAid Lanka is committed to full transparency with all our supporters." breadcrumbs={[{label:'Home',href:'/'},{label:'Reports'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[1000px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-8 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-[#E8973A]"/><span className="nunito font-extrabold text-[0.72rem] tracking-[0.18em] uppercase text-[#E8973A]">Board Communications 2025</span></div>
        <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] mb-5 font-light">The Board of Directors has issued the following important communications regarding the future direction of CandleAid Lanka. We encourage all supporters to read these carefully.</p>
        <div className="flex flex-col gap-3">
          {[['First Communication from the Board of Directors','/documents/reports/Communication_from_the_Board_of_Directors_of_CandleAid_Lanka.pdf'],['Second Communication from the Board of Directors','/documents/reports/20.03.25 2nd Communication from the Board of Directors.pdf'],['Third Communication from the President — The Future of CandleAid','/documents/reports/3rd Communication from the President - The future of CandleAid.pdf']].map(([l,h],i)=>(<a key={i} href={h} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 bg-white border border-[#EDE0CC] rounded-lg hover:border-[#C1502E] hover:shadow-sm transition-all no-underline group">
            <div className="text-2xl">📄</div>
            <div className="flex-1">
              <div className="nunito font-bold text-[0.92rem] text-[#2C1A0E] group-hover:text-[#C1502E] transition-colors">{l}</div>
              <div className="nunito text-[0.78rem] text-[#8C6845] mt-0.5">PDF Document · Click to open</div>
            </div>
            <div className="text-[#C1502E] nunito font-bold text-[0.8rem]">Open →</div>
          </a>))}
        </div>
      </div>
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] p-8 rounded-lg">
        <h3 className="lora font-bold text-[#2C1A0E] text-[1.3rem] mb-4">Annual Reports & Programme Forms</h3>
        <p className="nunito text-[0.95rem] text-[#5C3D25] leading-[1.85] mb-5 font-light">Annual reports, programme overviews, and beneficiary forms are available on the respective programme pages. For specific reports not listed here, please contact us directly.</p>
        <div className="flex flex-wrap gap-3">
          {[['GAM Overview','/documents/forms/GAM Overview.pdf'],['Education Form (Pre-University)','/documents/forms/AE 60 form Pre University - 2026.pdf'],['Cancer Patient Form (ACF30)','/documents/forms/Health-ACF-30-(3)-19.04.2024.pdf'],['Ways to Remit Donations','/documents/forms/Ways of making a Remittance to CA.pdf']].map(([l,h])=>(<a key={l} href={h} target="_blank" rel="noreferrer" className="nunito font-bold text-[0.82rem] px-4 py-2 bg-white border border-[#C4A882] text-[#C1502E] rounded hover:bg-[#C1502E] hover:text-white transition-all no-underline">📄 {l}</a>))}
        </div>
      </div>
    </div></section>
  </>);
}
