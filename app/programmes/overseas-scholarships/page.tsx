import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Overseas Scholarships' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Education Programme" title="Overseas Scholarships" subtitle="Supporting Sri Lankan students to pursue higher education abroad." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Overseas Scholarships'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#C1502E] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-6 font-light">CandleAid&apos;s Overseas Scholarships programme supports exceptional Sri Lankan students who have secured admission to reputable universities abroad but lack the financial means to pursue those opportunities.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">These scholarships represent CandleAid&apos;s commitment to not just alleviating immediate poverty, but to creating long-term change through education and opportunity. Recipients of these scholarships carry the potential to return to Sri Lanka and contribute significantly to their communities.</p>
        <div className="mt-8 p-5 bg-[#F2E8D5] rounded-lg">
          <div className="nunito font-bold text-[#C1502E] mb-2">Interested in sponsoring an overseas scholarship?</div>
          <p className="nunito text-[0.9rem] text-[#5C3D25]">Contact us at <a href="mailto:candleaid.inco@gmail.com" className="text-[#C1502E] underline">candleaid.inco@gmail.com</a> for more information.</p>
        </div>
      </div>
    </div></section>
  </>);
}
