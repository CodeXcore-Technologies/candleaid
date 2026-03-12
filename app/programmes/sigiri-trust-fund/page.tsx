import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Sigiri Trust Fund' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Health Programme" title="Sigiri Trust Fund (STF)" subtitle="Medical assistance through the Sigiri Trust Fund for those who cannot afford care." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Sigiri Trust Fund'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#8B6FAB] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">The Sigiri Trust Fund (STF) is a health programme under CandleAid that provides targeted medical assistance to patients who cannot meet their healthcare costs through conventional means.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">Working in partnership with medical professionals and hospital staff, STF identifies patients in genuine need and provides financial support to bridge the gap between what is needed and what a family can afford.</p>
        <div className="mt-8 p-5 bg-[#F2E8D5] rounded-lg nunito text-[0.9rem] text-[#5C3D25]">For enquiries contact: <a href="mailto:health@candleaid.org" className="text-[#C1502E] underline">health@candleaid.org</a></div>
      </div>
    </div></section>
  </>);
}
