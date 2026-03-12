import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Kidney Dialysis Assistance' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Health Programme" title="Kidney Dialysis Assistance Programme" subtitle="Supporting patients who require regular kidney dialysis treatment." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Kidney Dialysis'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#8B6FAB] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">Kidney dialysis is a life-sustaining treatment that many Sri Lankan patients require multiple times per week. The cost of this treatment is prohibitive for low-income families, often forcing them to choose between dialysis and other basic necessities.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">CandleAid&apos;s Kidney Dialysis Assistance Programme helps cover the costs of treatment for patients who cannot afford it, ensuring they can continue receiving the care they need to survive.</p>
        <div className="mt-8 p-5 bg-[#F2E8D5] rounded-lg nunito text-[0.9rem] text-[#5C3D25]">For enquiries contact: <a href="mailto:health@candleaid.org" className="text-[#C1502E] underline">health@candleaid.org</a></div>
      </div>
    </div></section>
  </>);
}
