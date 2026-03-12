import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
export const metadata: Metadata = { title: 'Mother and Child Project' };
export default function Page() {
  return (<>
    <PageHero eyebrow="Food Programme" title="Mother & Child Project" subtitle="Nutritional support for mothers and young children at their most critical stage." breadcrumbs={[{label:'Home',href:'/'},{label:'Programmes',href:'/programmes'},{label:'Mother & Child'}]}/>
    <section className="bg-[#FAF3E8] py-20 px-6"><div className="max-w-[900px] mx-auto">
      <div className="bg-[#FDF8F0] border border-[#EDE0CC] border-t-4 border-t-[#E8973A] p-10 rounded-lg">
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] mb-5 font-light">The Mother and Child Project focuses on the critical 1,000-day window from pregnancy to a child&apos;s second birthday — the period when proper nutrition has the most lasting impact on a child&apos;s physical and mental development.</p>
        <p className="nunito text-[1rem] text-[#5C3D25] leading-[1.9] font-light">CandleAid provides nutritional assistance to vulnerable expectant and new mothers from low-income families, ensuring that both mother and child receive the nourishment needed for a healthy start in life.</p>
      </div>
    </div></section>
  </>);
}
