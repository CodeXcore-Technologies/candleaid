import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Self Empowerment of Women (SEW)' };
export default function Page() {
  return (<>
    <PageHero eyebrow="General Projects" title="Self Empowerment of Women (SEW)" subtitle="Building skills, dignity and economic independence for women across Sri Lanka." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'SEW'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#6B8F71] p-10 rounded-lg mb-8">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">The SEW programme recognises that empowering women is one of the most effective ways to lift entire families and communities out of poverty. When a woman has economic independence, her children are more likely to be educated and healthy.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">CandleAid&apos;s SEW project provides women from low-income backgrounds with vocational training, tools, and seed funding to start small businesses. Past participants have gone on to start tailoring businesses, food stalls, handicraft enterprises, and more — employing other women and transforming their communities.</p>
      </div>
      <div className="bg-[#F2E8D5] border-l-4 border-[#6B8F71] p-6 rounded-r-lg">
        <blockquote className="lora italic text-[#2C1A0E] text-[1.1rem] leading-relaxed">&ldquo;They gave me a sewing machine and three months of training. Now I have my own shop. I employ two other women. One candle really does light another.&rdquo;</blockquote>
        <div className="mt-3 nunito font-bold text-[0.78rem] tracking-[0.1em] uppercase text-[#6B8F71]">— SEW Programme beneficiary, Puttalam</div>
      </div>
    </div></section>
  </>);
}
