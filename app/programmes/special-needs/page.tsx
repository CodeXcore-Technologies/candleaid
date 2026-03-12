import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Children With Special Needs' };
export default function Page() {
  return (<>
    <PageHero eyebrow="General Projects" title="Children With Special Needs" subtitle="Support, resources, and opportunity for differently-abled children across Sri Lanka." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Special Needs'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#6B8F71] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">Children with physical, intellectual, or developmental differences often fall through the cracks of Sri Lanka&apos;s social support systems. Their families frequently face extreme financial hardship compounded by the cost of specialised care and equipment.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">CandleAid&apos;s programme for Children With Special Needs provides financial assistance, equipment, and resources to help these children access education and care that meets their unique needs — giving them the best possible chance at a fulfilling life.</p>
        <div className="mt-8 p-5 bg-[#F2E8D5] rounded-lg nunito text-[0.9rem] text-[#5C3D25]">For enquiries contact: <a href="mailto:candleaid.inco@gmail.com" className="text-[#C1502E] underline">candleaid.inco@gmail.com</a></div>
      </div>
    </div></section>
  </>);
}
